import React from "react";
import LoginForm from "../../components/Auth/LoginForm/LoginForm";
import "./LoginPage.css";

const Login = (props) => {
  return (
    <div className="login">
      <h1>Bienvenido al software PRASI</h1>
      <LoginForm {...props} />
    </div>
  );
};

export default Login;
