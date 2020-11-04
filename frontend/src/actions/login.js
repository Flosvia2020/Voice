export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const loginRequest = (data) => ({ type: LOGIN_REQUEST, data });
export const loginSuccess = (token, refreshToken) => ({
  type: LOGIN_REQUEST,
  token,
  refreshToken,
});
export const loginFail = (err) => ({ type: LOGIN_FAIL, err });
