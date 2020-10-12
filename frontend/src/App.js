import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const App = () => {
  const [cookie, setCookie] = useCookies(["user"]);
  const [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    setHasCookie(cookie.user !== undefined);
  }, [cookie]);
  return (
    <div>
      {!hasCookie ? <Redirect to="/Login" /> : <Redirect to="" />}
      <Switch>
        <Route
          exact
          path="/Login"
          render={() => <Login setCookie={setCookie} />}
        />
        <Route exact path="/Signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default withCookies(App);
