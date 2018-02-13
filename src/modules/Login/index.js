import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './../../components/LoginForm';
import { updateUsername, updatePassword, updateRemeberMe, loginLoadingTrue } from './actions';
import getUser from './../../services/user';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <LoginForm
          rememberMe={this.props.rememberMe}
          updateUsername={this.props.updateUsername}
          updatePassword={this.props.updatePassword}
          updateRememberMe={this.props.updateRememberMe}
          isLoginLoading={this.props.isLoginLoading}
          loginLoadingTrue={this.props.loginLoadingTrue}
          getUser={this.props.getUser}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.login.username,
    password: state.login.password,
    rememberMe: state.login.rememberMe,
    isLoginLoading: state.login.isLoginLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateUsername: username => {
      dispatch(updateUsername(username))
    },
    updatePassword: password => {
      dispatch(updatePassword(password))
    },
    updateRememberMe: value => {
      dispatch(updateRemeberMe(value))
    },
    loginLoadingTrue: () => {
      dispatch(loginLoadingTrue())
    },
    getUser: () => {
      dispatch(getUser())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
