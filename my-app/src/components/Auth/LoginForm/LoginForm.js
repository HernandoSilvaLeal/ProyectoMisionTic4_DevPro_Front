import React, { useState } from "react";
import { connect } from "react-redux";
import { useMutation } from "@apollo/client";

import { LOGIN_MUTATION } from "../../../services/GraphQL/mutations/auth";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import "./LoginForm.css";
import { login } from "../../../actions/authAction";

const LoginForm = (props) => {
  const [form, setForm] = useState({
    email: "hernandosilvaleal@gmail.com",
    password: "KWj5JGtdoGgLsS2p",
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: { ...form },
  });

  const handleChange = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });

  const onClick = (e) => {
    e.preventDefault();
    props.login(form, { props, login });
  };

  if (props.loading) {
    return <div>Loading....</div>;
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

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
