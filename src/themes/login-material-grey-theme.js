
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoaderButton from '@mitchallen/react-loader-button';
import EmailInputField from '@mitchallen/react-email-input-field';
import PasswordInputField from '@mitchallen/react-password-input-field';
import CardGrey from '@mitchallen/react-card-grey';
import CardText from 'material-ui/Card/CardText';
import { orange500, cyanA100, grey400 } from 'material-ui/styles/colors';

const loginStyle = {
    padding: '0px 0'
};

const statusStyle = {
    color: 'white'
}
  
const loginFormStyle = {
    margin: '0 auto',
    maxWidth: '320px'
};
  
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

class LoginMaterialGreyTheme extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (      
            <CardGrey>
                <div style={loginStyle}>
                    <form style={loginFormStyle} onSubmit={this.props.handleSubmit}>
                        <CardText style={statusStyle}>{this.props.status}</CardText>
                        <EmailInputField
                            id='username'
                            fieldStyle={textFieldStyle}
                            defaultValue={this.props.username}
                            onChange={this.props.handleChange}
                        />
                        <PasswordInputField
                            id='password'
                            fieldStyle={textFieldStyle}
                            defaultValue={this.props.password}
                            onChange={this.props.handleChange}
                        />
                        <LoaderButton
                            disabled={ !this.props.validateForm() }
                            type='submit'
                            primary 
                            style={loginButtonStyle}
                            isLoading={this.props.isLoading}
                            text='Log in'
                            loadingText='Logging in…' 
                        />
                    </form>
                </div>
            </CardGrey>
        );
    }
}

LoginMaterialGreyTheme.defaultProps = {
    status: 'let\s do this',
    username: 'email@domain.com',
    password: 'password',
    isLoading: false
}

LoginMaterialGreyTheme.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default LoginMaterialGreyTheme;