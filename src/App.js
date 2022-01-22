import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import setAuthToken from "./utils/setAuthToken";

import store from "./store";
import { loadUser } from "./actions/auth";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/auth/PrivateRoute";
import Feed from "./components/feed/Feed";
import Profile from "./components/profile/Profile";
import CreateProfile from "./components/createProfile/CreateProfile";
import Users from "./components/users/Users";
import Settings from "./components/settings/Settings";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/users" component={Users} />
          <Route path="/settings" component={Settings} />
          <PrivateRoute path="/create-profile" component={CreateProfile} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/" component={Feed} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
