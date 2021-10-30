import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./LoginForm.css";
export default class LoginForm extends Component {
  render () {
    return (
      <div className="loginForm">
        <Form>
          <FormGroup>
              <Label for="exampleEmail">
                Email
              </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="email"
            type="email"
          />
          </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="contraseña"
                type="password"
              />
          </FormGroup>
        </Form>
        <Link to="/home">
          <Button color="primary">Iniciar Sesión</Button>
        </Link>
      </div>
    )
  }
}