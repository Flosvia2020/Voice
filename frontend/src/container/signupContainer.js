import React from "react";
import Singup from "../Components/signup/Signup";
import { connect } from "react-redux";
import { signupSuccess, signupLoading, signupFail } from "react-redux";
import Signup from "../Components/signup/Signup";
const SignupContainer = ({ signupSuccess, signupLoading, signupFail }) => {
  <Signup
    signupSuccess={signupSuccess}
    signupFail={signupFail}
    signupLoading={signupLoading}
  />;
};

export default connect(
  (state) => ({
    state: state.singupReducer.state,
    password: state.singupReducer.password,
  }),
  {
    signupFail,
    signupLoading,
    signupSuccess,
  }
)(SignupContainer);
