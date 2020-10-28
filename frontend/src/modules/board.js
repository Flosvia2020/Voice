import { handleActions } from "redux-actions";

const SAVE = "SAVE";
const REOMVE = "REMOVE";
const READ = "READ";
const LIST = "LIST";
const EDIT = "EDIT";

export const save = (data) => ({ type: SAVE, data });
