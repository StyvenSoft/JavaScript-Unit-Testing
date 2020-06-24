# JavaScript Unit Testing
Learning to write unit tests in JavaScript with Mocha.

- Define an automated test suite

- Describe how a test suite is used in software development

- Explain the benefits of automated testing


Why Test?

LESSON 1

Learn the benefits of software testing and the terminology to explain them.

Exercises

1. Introduction

2. Manual Testing

3. Automated Testing

The workflow might look like this:

- Write code and corresponding tests
- Enter a command into a terminal to run tests
- If the app behaves as intended, all tests should pass. Development is complete.
- If it does not behave as intended, at least one test should fail. Fix code and return to step 2.

4. The Test Suite

5. Tests As Documentation

6. Regression

Automate and Organize Tests

LESSON 2

Use the Mocha framework to automate and organize tests.

Exercises

1. Introduction

Testing is an essential part of development. When used properly, testing can catch and identify issues with your implementation code before you deploy it to users. Instead of testing every function manually, developers automate their tests with a test framework.

2. Install Mocha I

- The following command creates a file package.json that can be used to manage packages for the project.

```sh
$ npm init
```

With your project setup, you can install packages.

```sh
$ npm install mocha -D
```

The new directory structure contains the following:

```sh
project
|_ node_modules
|___ .bin
|___ mocha
|___ ...
|_ package.json
```


3. Install Mocha II

The first (and more tedious) method is to call it directly from node_modules:

```sh
$ ./node_modules/mocha/bin/mocha
```

set the value of "test" to mocha. It should look like this:

```sh
"scripts": {
  "test": "mocha"
}
```
Now you can call Mocha with the following command:

```sh
$ npm test
```
4. describe and it blocks

5. assert

6. Setup, Exercise, and Verify

7. Teardown

8. Hooks