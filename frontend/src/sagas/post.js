import { put, takeEvery, all } from "redux-saga/effects";
import { postTypes, postActions } from "../modules/post";
import client from "../api/client";

function* loadPostList() {
  const res = yield client.get("/api/post/list");
  yield put(postActions.loadSuccess(res.data));
}
function* loadPost(action) {
  const postData = yield client.get(`/api/post/list/${action.postId}`);
  yield put(postActions.loadPostSuccess(postData.data));
}

function* createPost(action) {
  console.log(action.postData);
  const config = {
    headers: {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
    },
  };

  client
    .post("/api/post/upload", action.postData, config)
    .then(yield put(postActions.loadRequest()))
    .then(setTimeout(2000))
    .catch((err) => alert(err.respones.data));
}

function* editPost(action) {
  client
    .put("/api/post/alter", action.postData)
    .then(yield put(postActions.loadRequest()))
    .catch((err) => alert(err.respones.data));
}

function* deletePost(action) {
  client
    .delete("/api/post/erase", action.postId)
    .catch(console.log)
    .then(console.log)
    .then(yield put(postActions.loadRequest()));
}

function* watchLoadPosts() {
  yield takeEvery(postTypes.LOAD_REQUEST, loadPostList);
  yield takeEvery(postTypes.CREATE_POST, createPost);
  yield takeEvery(postTypes.LOAD_POST, loadPost);
  yield takeEvery(postTypes.DELETE_POST, deletePost);
  yield takeEvery(postTypes.EDIT_POST, editPost);
}

export default function* postSaga() {
  yield all([watchLoadPosts()]);
}
