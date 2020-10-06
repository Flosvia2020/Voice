import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
  return (
    <Router>
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} />
    </Router>
  );
}

export default App;
