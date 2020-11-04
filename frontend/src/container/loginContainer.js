import React from "react";
import Login from "../Components/login/Login";
import { connect } from "react-redux";
const LoginContainer = ({ isLoading, token, refreshToken, loginRequest }) => (
  <Login
    isLoading={isLoading}
    token={token}
    refreshToken={refreshToken}
    loginRequest={loginRequest}
  ></Login>
);

const mapStateToProps = (state) => {
  return {
    isLoading: state.loginReducer.isLoading,
    token: state.loginReducer.token,
    refreshToken: state.loginReducer.refreshToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (data) => dispatch({ type: "LOGIN_REQUEST", data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
