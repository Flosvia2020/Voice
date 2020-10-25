import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withCookies, Cookies } from "react-cookie";
import LoginContainer from "./container/loginContainer";
import Signup from "./Components/signup/Signup";
import Main from "./Components/main/Main";
const App = () => {
  const userToken = new Cookies();
  const [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    setHasCookie(
      userToken.get("user") !== "" && userToken.get("user") !== undefined
    );
  }, []);
  return (
    <div>
      {hasCookie ? <Redirect to="/Main" /> : <Redirect to="/Login" />}
      <Switch>
        <Route exact path="/Login" component={LoginContainer} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Main" render={() => <Main cookie={userToken} />} />
      </Switch>
    </div>
  );
};

export default withCookies(App);
