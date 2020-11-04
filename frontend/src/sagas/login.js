import { put, takeEvery, call } from "redux-saga/effects";
import * as action from "../actions/login";
import client from "../api/client";

export default function* watchLogin() {
  yield takeEvery(action.LOGIN_REQUEST, login);
}

function* login(data) {
  try {
    const userData = { id: data.id, password: data.password };
    const { token, refreshToken } = yield client.post(
      "/api/auth/login",
      userData
    );
    yield put(action.loginSuccess(token, refreshToken));
  } catch (e) {
    yield put(action.loginFail(e));
  }
}
