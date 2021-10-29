import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Row } from "reactstrap";
export default class LoginForm extends Component {
  render () {
    return (
      <div>
        <Row xs="4">
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
        </Row>
      </div>
    )
  }
}