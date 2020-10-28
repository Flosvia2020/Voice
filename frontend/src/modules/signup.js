import e from "express";
import { createAction, handldActions } from "redux-actions";

const SIGNUP_SUCCESS = "SUCCESS";
const SIGNUP_FAIL = "FAIL";
const SIGNUP_LOADING = "SIGNUP_LOADING";
const PASSWORD_MATCHING = "PASSWORD_MATCHING";
const PASSWORD_MISMATCH = "PASSWORD_MISMATCH";

export const signupSuccess = createAction(result.SIGNUP_SUCCESS);
export const signupLoading = createAction(result.SIGNUP_LOADING);
export const signupFail = createAction(result.SIGNUP_FAIL);

const initalState = {
  stat: "",
  password: "matching",
};
const singupReducer = handldActions(
  {
    [SIGNUP_SUCCESS]: (state, action) => ({ state: "success" }),
    [SIGNUP_FAIL]: (state, action) => ({ state: "fail" }),
    [SIGNUP_LOADING]: (state, action) => ({ state: "loading" }),
    [PASSWORD_MATCHING]: (state, action) => ({ password: "matching" }),
    [PASSWORD_MISMATCH]: (state, action) => ({ password: "mismatching" }),
  },
  initalState
);

export default singupReducer;
