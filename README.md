@mitchallen/react-cognito-login
==
React AWS Cognito login component
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

## Installation

    $ npm init
    $ npm install @mitchallen/react-cognito-login --save
  
* * *

## Usage

1. Visit: https://aws.amazon.com/cognito/
2. Create a user pool
3. Create a test user in the user pool
4. Create a React app
5. Paste the code below into ```src/App.js```
6. Create ```src/config.js``` and plug in your Cognito values for:
 *  __User Pool ID__ 
 * __App Client ID__
7. Run the app and login as the test user 

### src/App.js

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CognitoLoginGui from '@mitchallen/react-cognito-login';

import { CognitoUserPoolId, CognitoAppClientId } from './config';

const cognitoUserPoolId = CognitoUserPoolId;
const cognitoAppClientId = CognitoAppClientId;

class App extends Component {
    
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false,
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Login Demo</h1>
        </header>
        <h4>cognitoUserPoolId={cognitoUserPoolId}</h4>
        <h4>cognitoAppClientId={cognitoAppClientId}</h4>
        <h4>authenticated: {this.state.isAuthenticated ? "true": "false"}</h4>
        <CognitoLoginGui 
          defaultStatus='Please login'
          userHasAuthenticated={this.userHasAuthenticated}
          cognitoUserPoolId={cognitoUserPoolId}
          cognitoAppClientId={cognitoAppClientId}
        />
      </div>
    );
  }
}

export default App;

```

### src/config.js

Substitute your pool values:

```
export const CognitoUserPoolId = 'us-east-1_blah-blah-blah';
export const CognitoAppClientId = '6ublahblahblahblahblahblah';
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
import CognitoLoginGui from '@mitchallen/react-cognito-login';
```

__NOTE:__ CognitoLoginGui must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<CognitoLoginGui />
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

#### Version 0.2.3

* changed property succcessMessage (3 c's) to successMessage (2 c's)

#### Version 0.2.2

* moved default theme to it's own package: 
 * [@mitchallen/react-login-theme-grey](https://www.npmjs.com/package/@mitchallen/react-login-theme-grey)

#### Version 0.2.1

* fixed type-o's in success message and readme

#### Version 0.2.0

* Total rewrite, not compatible with older versions

#### Version 0.1.3

* rebuilt before publishing

#### Version 0.1.2

* Added call to props.userHasAuthenticated(true) on successful login
* Removed call to props.updateUserToken

#### Version 0.1.1

* Button reverts state when token updated

#### Version 0.1.0 

* initial release

* * *