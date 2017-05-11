const {spawn} = require('child_process');

function getExitHandler(processName, nukeEverything) {
  return function(code) {
    process.stdout.write(`${processName} | Exited with code ${code}.`);
    if(nukeEverything === true) {
      process.exit(code);
    }
  };
};
function getErrorHandler(processName) {
  return function(error) {
    process.stderr.write(`${processName} | ${error.toString()}`);
  };
};

let seleniumInitialized = false;
let applicationInitialized = false;

const seleniumDriver = spawn('./node_modules/.bin/phantomjs', ['--webdriver=4444']);

seleniumDriver.stdout.on('data', (data) => {
  const message = data.toString();
  if(!seleniumInitialized && message.indexOf('running on port') !== -1) {
    seleniumInitialized = true; // run the following only once
    const application = spawn('npm', ['run', 'dev']);
    application.stdout.on('data', (data) => {
      const applicationMessage = data.toString()
      if(!applicationInitialized && applicationMessage.indexOf('Compiled successfully') !== -1) {
        applicationInitialized = true; // run the following only once
        const codeceptRunner = spawn('./node_modules/.bin/codeceptjs', ['run', '--steps', '--reporter', 'mochawesome']);
        codeceptRunner.stdout.on('data', (data) => {
          process.stdout.write(data.toString());
        });
        codeceptRunner.stderr.on('data', getErrorHandler('codecept'));
        codeceptRunner.on('error', getErrorHandler('codecept'));
        codeceptRunner.on('close', (code) => {
          process.stdout.write(`codecept | Exiting with code ${code}`);
          seleniumDriver.kill('SIGTERM');
          application.kill('SIGINT');
          process.exit(code);
        });
      }
    });
    application.stderr.on('data', getErrorHandler('app'));
    application.on('error', getErrorHandler('app'));
    application.on('close', getExitHandler('app'));
  }
});

seleniumDriver.stderr.on('data', getErrorHandler('selenium driver'));
seleniumDriver.on('error', getErrorHandler('selenium driver'));
seleniumDriver.on('close', getExitHandler('selenium driver'));
