import e from "express";
import { createAction, handldActions } from "redux-actions";

const SIGNUP_SUCCESS = "SUCCESS";
const SIGNUP_FAIL = "FAIL";
const PASSWORD_MATCHING = "PASSWORD_MATCHING";
const PASSWORD_MISMATCH = "PASSWORD_MISMATCH";

export const signupSuccess = createAction(result.SIGNUP_SUCCESS);
export const signupFail = createAction(result.SIGNUP_FAIL);
