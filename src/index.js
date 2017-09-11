/*
    Module: @mitchallen/react-cognito-login
    Author: Mitch Allen
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoaderButton from '@mitchallen/react-loader-button';
import EmailInputField from '@mitchallen/react-email-input-field';
import PasswordInputField from '@mitchallen/react-password-input-field';
import CardGrey from '@mitchallen/react-card-grey';
import { orange500, cyanA100, grey400 } from 'material-ui/styles/colors';
import './CognitoLogin.css'; 
// import {
//   CognitoUserPool,
//   AuthenticationDetails,
//   CognitoUser
// } from 'amazon-cognito-identity-js';
// import config from '../config.js';
// import { withRouter } from 'react-router-dom';

const loginButtonStyle = {
  margin: 20
};

const textFieldStyle = {
  whiteStyle: {
    color: '#FFFFFF',
  },
  hintStyle: {
    color: grey400,
  },
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: grey400,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: cyanA100,
  },
};

class CognitoLogin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      username: '',
      password: '',
    };
  }

  validateForm() {
    return this.state.username.length > 0
      && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  login(username, password) {
    const userPool = new this.props.amazonCognitoIdentity.CognitoUserPool({
      UserPoolId: this.props.cognitoUserPoolId,
      ClientId: this.props.cognitoAppClientId
    });
    const authenticationData = {
      Username: username,
      Password: password
    };

    const user = new this.props.amazonCognitoIdentity.CognitoUser({ Username: username, Pool: userPool });
    const authenticationDetails = new this.props.amazonCognitoIdentity.AuthenticationDetails(authenticationData);

    return new Promise((resolve, reject) => (
      user.authenticateUser(authenticationDetails, {
        onSuccess: (result) => resolve(result.getIdToken().getJwtToken()),
        onFailure: (err) => reject(err),
      })
    ));
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      const userToken = await this.login(this.state.username, this.state.password);
      this.setState({ isLoading: false });
      this.props.userHasAuthenticated(true);
      // this.props.history.push('/');
    } catch(e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <CardGrey>
        <div className='Login'>
          <form onSubmit={this.handleSubmit}>
             <EmailInputField
              id='username'
              fieldStyle={textFieldStyle}
              defaultValue={this.state.username}
              onChange={this.handleChange}
            />
            <PasswordInputField
              id='password'
              fieldStyle={textFieldStyle}
              defaultValue={this.state.password}
              onChange={this.handleChange}
            />
            <LoaderButton
              disabled={ !this.validateForm() }
              type='submit'
              primary 
              style={loginButtonStyle}
              isLoading={this.state.isLoading}
              text='Log in'
              loadingText='Logging in…' />
          </form>
        </div>
      </CardGrey>
    );
  }
}

CognitoLogin.propTypes = {
  amazonCognitoIdentity: PropTypes.object.isRequired,
  userHasAuthenticated: PropTypes.func.isRequired,
  cognitoUserPoolId: PropTypes.string.isRequired, 
  cognitoAppClientId: PropTypes.string.isRequired
};

export default CognitoLogin;