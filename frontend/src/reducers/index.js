import loginReducer from "./login";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
