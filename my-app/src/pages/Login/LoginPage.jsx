import React, { Component } from "react";
import LoginForm from "../../components/Auth/LoginForm/LoginForm";
import "./LoginPage.css";
export default class LoginPage extends Component {
  render () {
    return (
      <div className='login'>
        <h1>Bievenido al Software Prasi</h1>
        <LoginForm/>
      </div>
    )
  }
}