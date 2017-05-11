module.exports = function(config) {
  config.set({
    basePath: './',
    browsers: [
      'PhantomJS',
    ],
    frameworks: [
      'mocha',
      'sinon-chai',
    ],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/test.entry.js',
    ],
    logLevel: config.LOG_INFO,
    preprocessors: {
      'test/test.entry.js': ['coverage', 'webpack', 'sourcemap'],
    },
    plugins: [
      'karma-coverage',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-sinon-chai',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    reporters: [
      'coverage',
      'mocha',
    ],
    coverageReporter: {
      types: [
        'html',
        'lcov',
      ],
      dir: 'static/coverage',
      subdir: 'karma',
    },
    phantomjsLauncher: {
      exitOnResourceError: true,
    },
    webpackServer: {
      noInfo: true,
    },
    webpack: {
      devtool: 'inline-source-map',
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              sourceMap: 'inline',
              presets: ['airbnb', 'es2015', 'react'],
            },
          },
        ],
      },
    },
  });
};
