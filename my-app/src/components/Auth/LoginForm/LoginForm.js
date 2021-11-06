import React, { useState } from "react";
import { connect } from "react-redux";
import { useMutation } from "@apollo/client";
import { Button } from "reactstrap";
import { Form, Formik } from "formik";

import { LOGIN_MUTATION } from "../../../services/GraphQL/mutations/auth";

import Input from "../../Input";
import "./LoginForm.css";
import { login } from "../../../actions/authAction";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const initialValues = {
    email: "hernandosilvaleal@gmail.com",
    password: "KWj5JGtdoGgLsS2p",
  };

  const [form, setForm] = useState({
    ...initialValues,
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: { ...form },
  });

  const handleSubmit = (values) => {
    setForm({ ...values });
    props.login(form, { props, login });
  };

  if (props.loading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="loginForm">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Input name="email" placeholder="email" type="email" label="Email" />
          <Input
            name="password"
            placeholder="contraseña"
            label="Contraseña"
            type="password"
          />
          <Button color="primary" type="submit">
            Iniciar Sesión
          </Button>
          <Link to="/register">No estás registrado?</Link>
        </Form>
      </Formik>
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
