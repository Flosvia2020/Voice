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
  isSuccess: false,
  isLoading: false,
};

const loginReducer = handleActions(
  {
    [LOGIN]: (state, action) => ({ isSuccess: false, isLoading: false }),
    [LOGIN_LOADING]: (state, action) => ({ isLoading: true }),
    [LOGIN_SUCCESS]: (state, action) => ({
      isSuccess: true,
      isLoading: false,
    }),
    [LOGIN_FAIL]: (state, action) => ({ isSuccess: false, isLoading: false }),
  },
  initalState
);

export default loginReducer;
