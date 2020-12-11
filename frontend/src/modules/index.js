import { combineReducers } from "redux";
import authReducer from "./auth";
import postReducer from "./post";

const rootReducer = combineReducers({ postReducer, authReducer });

export default rootReducer;
