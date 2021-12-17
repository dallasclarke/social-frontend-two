import React, { useState } from "react";

import "./Auth.css";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    birthday: "",
  });

  const { email, password, fullName, birthday } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="register">
      <form>
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
        <label>Name:</label>
        <input
          type="text"
          name="name"
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
