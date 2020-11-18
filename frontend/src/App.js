import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./Components/login/Login";
import Signup from "./Components/signup/Signup";
import Main from "./Components/main/Main";
import { Provider } from "react-redux";
import store from "./store";
import Global from "./Style";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Global />
        {localStorage.getItem("accessToken") == null ? (
          <Redirect to="/login" />
        ) : (
          <Redirect to="/Main" />
        )}
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Main" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
};

store.subscribe(App);

export default App;
