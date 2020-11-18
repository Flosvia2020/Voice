import { put, takeEvery, all, call } from "redux-saga/effects";
import { postTypes, postActions } from "../modules/post";
import client from "../api/client";

function* loadPostList() {
  const res = yield client.get("/api/post/list");
  yield put(postActions.loadSuccess(res.data));
}
function* loadPost(action) {
  const postData = yield client
    .get(`/api/post/list/${action.postId}`)
    .catch(console.log);
  yield put(postActions.loadPostSuccess(postData.data));
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

function* deletePost(action) {
  yield client.delete(`/api/post/erase/`);
}

function* watchLoadPosts() {
  yield takeEvery(postTypes.LOAD_REQUEST, loadPostList);
  yield takeEvery(postTypes.CREATE_POST, createPost);
  yield takeEvery(postTypes.LOAD_POST, loadPost);
}

export default function* postSaga() {
  yield all([watchLoadPosts()]);
}
