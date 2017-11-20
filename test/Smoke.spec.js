import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chai from 'chai';
import should from 'should';

const expect = Chai.expect;

import CognitoLoginGui from '../src/index';

const userHasAuthenticated = authenticated => {
  console.log("userHasAuthenticated: " + authenticated ? "true" : "false" );
}

const cognitoUserPoolId = process.env.COGNITO_TEST_USER_POOL_ID;
const cognitoAppClientId = process.env.COGNITO_TEST_CLIENT_ID;

describe('CognitoLoginGui', () => {

  const renderer = new ShallowRenderer();
  renderer.render(<CognitoLoginGui  
    userHasAuthenticated={userHasAuthenticated}
    cognitoUserPoolId={cognitoUserPoolId}
    cognitoAppClientId={cognitoAppClientId}
  />);
  const result = renderer.getRenderOutput();

  it('component should contain props', () => {
    // console.log(JSON.stringify(result));
    should.exist(result.props);
  });

  it('default status should be ready', () => {
    should.exist(result.props.status);
    expect(result.props.status).to.eql('ready');
  });

  it('default username should be empty string', () => {
    expect(result.props.username).to.eql('');
  });

  it('default password should be empty string', () => {
    expect(result.props.password).to.eql('');
  });

});