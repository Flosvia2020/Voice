import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddlware from "redux-saga";

const middleware = createSagaMiddlware();
const store = createStore(rootReducer, applyMiddleware(middleware));

middleware.run(rootSaga);

export default store;
