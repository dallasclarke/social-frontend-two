import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../actions/auth";

import "./Auth.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const { isAuth } = useSelector((state) => state.auth);
  // console.log(isAuth);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login">
      <form onSubmit={(e) => onSubmit(e)}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="example@email.com"
          onChange={(e) => onChange(e)}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => onChange(e)}
        />
        <input type="submit" />
      </form>
      <p>Not a user?</p>
      <a href="#">Sign up now</a>
    </div>
  );
}

export default Login;
