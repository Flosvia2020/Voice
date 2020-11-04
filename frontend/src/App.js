import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { withCookies, Cookies } from "react-cookie";
import { CookiesProvider } from "react-cookie";
import loginContainer from "./container/loginContainer";
import Signup from "./Components/signup/Signup";
import Main from "./Components/main/Main";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  const userToken = new Cookies();
  const [hasCookie, setHasCookie] = useState(false);
  useEffect(() => {
    setHasCookie(
      userToken.get("token") !== "" && userToken.get("token") !== undefined
    );
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <CookiesProvider>
          {hasCookie ? <Redirect to="/Main" /> : <Redirect to="/Login" />}
          <Switch>
            <Route exact path="/Login" component={loginContainer} />
            <Route exact path="/Signup" component={Signup} />
            <Route
              exact
              path="/Main"
              render={() => <Main cookie={userToken} />}
            />
          </Switch>
        </CookiesProvider>
      </Router>
    </Provider>
  );
};
store.subscribe(App);
export default withCookies(App);
