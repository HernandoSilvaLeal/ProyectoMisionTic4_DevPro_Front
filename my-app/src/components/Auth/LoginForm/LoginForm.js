import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import { LOGIN_MUTATION } from "../../../services/GraphQL/mutations/login";
import "./LoginForm.css";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "hernandosilvaleal@gmail.com",
    password: "KWj5JGtdoGgLsS2p",
  });
  const [login, { error }] = useMutation(LOGIN_MUTATION);

  const handleChange = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });

  const onClick = (e) => {
    e.preventDefault();
    logUser();
  };

  const logUser = () => {
    const user = login({
      variables: {
        email: form.email,
        password: form.password,
      },
    });

    console.log(user);
  };

  if (error) {
    console.log(error);
  }

  return (
    <div className="loginForm">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="contraseña"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="primary" onClick={onClick}>
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
