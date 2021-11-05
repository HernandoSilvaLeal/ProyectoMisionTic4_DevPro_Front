import React, { useState } from "react";
import { Button, Form } from "reactstrap"
import Input from "../../Input";
import "./RegisterForm.css";

const RegisterForm = (props) => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const onClickR = (e) => {
  };

  const onClickI = (e) => {
  };


  return(
    <div className="RegisterForm">
      <Form>
        <Input
          name="nombre"
          placeholder="Nombre"
          type="string"
          label="Nombre"
        />
        <Input
          name="identificacion"
          placeholder="Identificación"
          type="string"
          label="Identificación"
        />
        <Input
          name="email"
          placeholder="Correo"
          type="email"
          label="Correo"
        />
        <Input
          name="password"
          placeholder="contraseña"
          label="Contraseña"
          type="password"
        />
        <Input
          name="Tipo"
          placeholder="Rol"
          label="Tipo de Rol"
          type="select"
        />
        <div>
        <Button color="primary" onClick={onClickR}>
          Registarse
        </Button>
        <br/>
        <br/>
        <Button color="primary" onClick={onClickI}>
          Iniciar Sesión
        </Button>
        </div>
      </Form>
    </div>
  )
}

export default (RegisterForm)