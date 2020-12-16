import { combineReducers } from "redux";
import authReducer from "./auth";
import postReducer from "./post";
import repleReducer from "./reple";

const rootReducer = combineReducers({ postReducer, authReducer, repleReducer });

export default rootReducer;
