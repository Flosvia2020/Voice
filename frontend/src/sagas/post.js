import { put, takeEvery, all, call } from "redux-saga/effects";
import { postTypes, postActions } from "../modules/post";
import client from "../api/client";

function* loadPostList() {
  const res = yield client.get("/api/post/list");
  yield put(postActions.loadSuccess(res.data));
}
function* loadPost(action) {
  console.log(action.postId);
  const postData = yield client.get(`/api/post/list/${action.postId}`).data;
  yield put(postActions.loadPostSuccess(postData));
}

function* createPost(action) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
    },
  };

  yield client
    .post("/api/post/upload", action.postData, config)
    .then(put({ type: postTypes.LOAD_REQUEST }))
    .catch((err) => alert(err.respones.data));
}

function* watchLoadPosts() {
  yield takeEvery(postTypes.LOAD_REQUEST, loadPostList);
  yield takeEvery(postTypes.CREATE_POST, createPost);
  yield takeEvery(postTypes.LOAD_POST, loadPost);
}

export default function* postSaga() {
  yield all([watchLoadPosts()]);
}
