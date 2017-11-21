/*
    Module: @mitchallen/react-cognito-login
    Author: Mitch Allen
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CognitoLoginFactory from '@mitchallen/cognito-login';
import LoginThemeGrey from '@mitchallen/react-login-theme-grey';
 
class CognitoLoginGui extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      status: this.props.defaultStatus || 'Login',
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
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

  handleSubmit = async (event) => {

    event.preventDefault();

    this.setState({ 
      status: this.props.submitMessage, 
      isLoading: true 
    });

    CognitoLoginFactory.create({
      userPoolId: this.props.cognitoUserPoolId,
      clientId: this.props.cognitoAppClientId
    })
    .then( obj => obj.login({
            username: this.state.username,    
            password: this.state.password 
        })
    )
    .then( token => {
        // console.log(token);
        // user has successfully logged in
        // update state or redux store
        this.setState( { 
          isLoading: false, 
          status: this.props.succcessMessage 
        }); 
        this.props.userHasAuthenticated(true);
    })
    .catch( err => { 
        // login failed 
        this.setState({ 
          isLoading: false, 
          status: err.message 
        });
        console.error(err);
    });
  }

  render() {

    // TODO - code split
    // var must start with cap or won't render
    const DynamicTheme = this.props.theme || LoginThemeGrey;

    return (
      <DynamicTheme
        handleChange={this.handleChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}
        validateForm={this.validateForm.bind(this)}
        status={this.state.status}
        isLoading={this.state.isLoading}
        username={this.state.username}
        password={this.state.password}
      />
    );
  }
}

CognitoLoginGui.defaultProps = {
  submitMessage: 'submitting ...',
  succcessMessage: 'You are logged in!'
}

CognitoLoginGui.propTypes = {
  userHasAuthenticated: PropTypes.func.isRequired,
  cognitoUserPoolId: PropTypes.string.isRequired,
  cognitoAppClientId: PropTypes.string.isRequired
};

export default CognitoLoginGui;