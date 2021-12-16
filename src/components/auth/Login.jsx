import React from "react";

import { Form, Row } from "react-bootstrap";

import "./Auth.css";

function Login() {

  return (
    <div className="login">
      <Form>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="youremail@123.com"
          />
          <Form.Label>Password:</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
