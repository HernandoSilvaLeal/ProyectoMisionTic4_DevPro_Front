import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "reactstrap";
import Input from "../../Input";
import Select from "../../Select";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
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
        <Input name="email" placeholder="Correo" type="email" label="Correo" />
        <Input
          name="password"
          placeholder="contraseña"
          label="Contraseña"
          type="password"
        />
        <Select name="role" label="Tipo de Rol">
          <option>Seleccione un rol</option>
          <option value="ADMIN">Administrador</option>
          <option value="LEADER">Líder de proyecto</option>
          <option value="STUDENT">Estudiante</option>
        </Select>
        <Button color="primary">Registarse</Button>
        <br />
        <br />
        <Link to="/login">
          <Button color="primary">
            Iniciar Sesión
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default RegisterForm;
