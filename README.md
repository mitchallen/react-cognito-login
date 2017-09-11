@mitchallen/react-cognito-login
==
CognitoLogin React component
--

<p align="left">
  <a href="https://circleci.com/gh/mitchallen/react-cognito-login">
    <img src="https://img.shields.io/circleci/project/github/mitchallen/react-cognito-login.svg" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/react-cognito-login">
    <img src="https://codecov.io/gh/mitchallen/react-cognito-login/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-cognito-login">
    <img src="http://img.shields.io/npm/dt/@mitchallen/react-cognito-login.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-cognito-login">
    <img src="http://img.shields.io/npm/v/@mitchallen/react-cognito-login.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/@mitchallen/react-cognito-login">
    <img src="https://img.shields.io/github/license/mitchallen/react-cognito-login.svg" alt="License"></a>
  </a>
</p>

# UNDER CONSTRUCTION

## Installation

    $ npm init
    $ npm install @mitchallen/react-cognito-login --save
  
* * *

## Usage

1: Add this line near the top of your file (like ```src/App.js```):

```
import CognitoLogin from '@mitchallen/react-cognito-login';
```

__NOTE:__ CognitoLogin must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<CognitoLogin />
```


* * *

## Testing

### Run the Tests

To test, go to the root folder and type (sans __$__):

    $ npm test
    
## Component Testing

### Prerequisite

If you've never installed __create-react-app__ (you may need to use ```sudo```):

```
$ npm install -g create-react-app
```

### Create a local npm link

In the original component folder (you may need to use ```sudo```):

```
$ npm link
```

### Create a test package

Create a root test folder and then do the following:

```
$ create-react-app react-cognito-login-test
$ cd react-cognito-login-test
$ npm link @mitchallen/react-cognito-login
```

### Modify src/App.js

1: Add this line near the top:

```
import CognitoLogin from '@mitchallen/react-cognito-login';
```

__NOTE:__ CognitoLogin must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<CognitoLogin />
```

### Run The Test App

```
$ npm start
```

### Cleanup

Remember to unlink when done.
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/react-cognito-login.git](https://bitbucket.org/mitchallen/react-cognito-login.git)
* [github.com/mitchallen/react-cognito-login.git](https://github.com/mitchallen/react-cognito-login.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.2

* Added call to props.userHasAuthenticated(true) on successful login
* Removed call to props.updateUserToken

#### Version 0.1.1

* Button reverts state when token updated

#### Version 0.1.0 

* initial release

* * *