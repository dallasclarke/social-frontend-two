import React, { useState } from "react";

import "./Auth.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login">
      <form>
        <label>Email:</label>
        <input type="email" name="email" placeholder="example@email.com" />
        <label>Password:</label>
        <input type="password" name="password" placeholder="Password" />
        <input type="submit"  />
      </form>
      <p>Not a user?</p>
      <a href="#">Sign up now</a>
    </div>
  );
}

export default Login;
