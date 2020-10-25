import { createAction, handleActions } from "redux-actions";

const LOGIN = "LOGIN";
const LOGIN_LOADING = "LOGIN_LOADING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";

export const beforeLogin = createAction(LOGIN);
export const loading = createAction(LOGIN_LOADING);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFail = createAction(LOGIN_FAIL);

const initalState = {
  state: "nomal",
};

const loginReducer = handleActions(
  {
    [LOGIN]: (state, action) => ({ state: "nomal" }),
    [LOGIN_LOADING]: (state, action) => ({ state: "loading" }),
    [LOGIN_SUCCESS]: (state, action) => ({ state: "success" }),
    [LOGIN_FAIL]: (state, action) => ({ state: "nomal" }),
  },
  initalState
);

export default loginReducer;
