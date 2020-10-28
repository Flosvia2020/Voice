import React from "react";
import Login from "../Components/login/Login";
import { connect } from "react-redux";
import {
  beforeLogin,
  loading,
  loginSuccess,
  loginFail,
} from "../modules/login";

const LoginContainer = ({
  state,
  beforeLogin,
  loading,
  loginSuccess,
  loginFail,
}) => (
  <Login
    state={state}
    beforeLogin={beforeLogin}
    loading={loading}
    loginSuccess={loginSuccess}
    loginFail={loginFail}
  ></Login>
);

export default connect((state) => ({ state: state.loginReducer }), {
  beforeLogin,
  loading,
  loginSuccess,
  loginFail,
})(LoginContainer);
