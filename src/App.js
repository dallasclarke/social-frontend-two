import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Feed from "./components/feed/Feed";

import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Switch>
          {/* <Login /> */}
          {/* <Register /> */}
          {/* <Feed /> */}
          <Route path="/login" component={Login} />
          <Route path="register" component={Register} />
          
        </Switch>
      </>
    </Router>
  );
}

export default App;
