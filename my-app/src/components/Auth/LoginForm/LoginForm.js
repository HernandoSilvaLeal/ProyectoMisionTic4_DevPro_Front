import React, { useState } from "react";
import { connect } from "react-redux";
import { useMutation } from "@apollo/client";
import { Button, Form } from "reactstrap";

import { LOGIN_MUTATION } from "../../../services/GraphQL/mutations/auth";

import Input from "../../Input";
import "./LoginForm.css";
import { login } from "../../../actions/authAction";
import { Link } from "react-router-dom";

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
        <Input
          name="email"
          placeholder="email"
          type="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          placeholder="contraseña"
          label="Contraseña"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <Button color="primary" onClick={onClick}>
          Iniciar Sesión
        </Button>
        <Link to="/register">No estás registrado?</Link>
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
