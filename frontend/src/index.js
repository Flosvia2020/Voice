import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules/index";
import App from "./App";

const store = createStore(rootReducer);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
