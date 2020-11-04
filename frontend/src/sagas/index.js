import watchLogin from "./login";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([watchLogin()]);
}

export default rootSaga;
