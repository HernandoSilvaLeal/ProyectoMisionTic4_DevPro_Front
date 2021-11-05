import React from "react";
import RegisterForm from "../../components/Auth/RegisterForm/RegisterForm";
import "./RegisterPage.css"

const RegisterPage = (props) => {
    return (
      <div className="RegisterF">
        <h1>RegisterPage</h1>
        <RegisterForm/>
      </div>
    );
  }

export default RegisterPage;

