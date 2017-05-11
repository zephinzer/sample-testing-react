# What's This
This repository is the example repo used for the React.js Singapore meetup on 23rd of May 2017.

The slides for the talk are available at: 

https://presenting.joeir.net/reactjs-sg-enzyme#/

# More to Read
A full article describing each of these tools is available on my blog at:

https://blog.joeir.net/automated-testing-of-react-js-apps-with-depth

# How To Use It
Don't just copy and paste it into your own projects, rather, tinker with the provided
configurations and see what breaks/works better.

# Getting Started

## Clone Repo & Install Dependencies
Clone this repo. If you use `yarn` (which you should), install the dependencies like this:

```bash
# yarn install
```

Or else plain ol' `npm` will do:

```bash
# npm install
```

## Run Karma functinoal tests
To run the Karma tests (which run Enzyme):

```bash
# npm run test
```

Coverage reports will be available in the `/static/coverage/karma` folder.

Run `npm run dev` and access it at http://localhost:3000/static/coverage/karma/index.html.

## RUn ESLint code quality checks
To run ESLint:

```bash
# npm run eslint
```

## Run Plato code quality tests
To run the Plato ECMAScript code quality tool:

```bash
# npm run plato
```

Coverage reports will be available in the `/static/coverage/plato` folder.

Run `npm run dev` and access it at http://localhost:3000/static/coverage/plato/index.html.

## Run Codecept acceptance tests
To run the Feature tests (which uses Codecept):

1) Start up the selenium server with:
```bash
# npm run selenium
```

2) In another terminal, run the application:
```bash
# npm run dev
```

3) Finally in a last terminal, run Codecept:
```bash
# npm run codecept
```

Coverage reports will be available in the `/static/coverage/codecept` folder.

Run `npm run dev` and access it at http://localhost:3000/static/coverage/codecept/index.html.