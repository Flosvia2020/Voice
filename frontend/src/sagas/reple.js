import { put, takeEvery, all } from "redux-saga/effects";
import { repleTypes, repletActions } from "../modules/reple";
import client from "../api/client";

function* createReple(action) {
  client.post("/addComment", action.data).then(alert).catch(alert);
}
export default function* watchReple() {
  yield takeEvery(repleTypes.CREATE_REPLE, createReple);
}
