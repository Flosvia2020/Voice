import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Main from "./Components/Main";
const App = () => {
  const [cookie, setCookie] = useCookies(["user"]);
  const [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    setHasCookie(cookie.user !== "" && cookie.user !== undefined);
  }, [cookie]);
  return (
    <div>
      {hasCookie ? <Redirect to="/Main" /> : <Redirect to="/Login" />}
      <Switch>
        <Route
          exact
          path="/Login"
          render={() => <Login setCookie={setCookie} />}
        />
        <Route exact path="/Signup" component={Signup} />
        <Route
          exact
          path="/Main"
          render={() => <Main setCookie={setCookie} cookie={cookie} />}
        />
      </Switch>
    </div>
  );
};

export default withCookies(App);
