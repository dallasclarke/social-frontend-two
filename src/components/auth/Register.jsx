import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { register } from "../../actions/auth";

import "./Auth.css";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    birthday: "",
  });

  const { email, password, fullName, birthday } = formData;

  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(register({ email, password, fullName, birthday }));
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="register">
      <form onSubmit={(e) => onSubmit(e)}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          required
        />
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={fullName}
          onChange={(e) => onChange(e)}
          required
        />
        <label>Birthday</label>
        <input
          type="date"
          name="birthday"
          value={birthday}
          onChange={(e) => onChange(e)}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
