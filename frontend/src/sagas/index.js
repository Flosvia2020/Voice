import { all, fork } from "redux-saga/effects";
import watchLoadPosts from "./post";
import watchReple from "./reple";

export default function* rootSaga() {
  yield all([fork(watchLoadPosts), fork(watchReple)]);
}
