import { useState } from "react";
import { useMutation } from "@apollo/client";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Form, Formik } from "formik";

import Input from "../../Input";
import Select from "../../Select";
import "./RegisterForm.css";

import { signUp } from "../../../actions/authAction";
import { SIGNUP_MUTATION } from "../../../services/GraphQL/mutations/auth";

const RegisterForm = (props) => {
  const initialValues = {
    name: "",
    role: "",
    identification: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [form, setForm] = useState({ ...initialValues });

  const [signUp] = useMutation(SIGNUP_MUTATION, {
    variables: { ...form },
  });

  const handleSubmit = (values) => {
    setForm({ ...values });
    props.signUp(form, { props, signUp });
  };

  return (
    <div className="RegisterForm">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Input
            name="name"
            placeholder="Nombre"
            type="string"
            label="Nombre"
          />
          <Input
            name="identification"
            placeholder="Identificación"
            type="string"
            label="Identificación"
          />
          <Input
            name="email"
            placeholder="Correo"
            type="string"
            label="Correo"
          />
          <Input
            name="password"
            placeholder="contraseña"
            label="Contraseña"
            type="password"
          />
          <Input
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            label="Confirmar contraseña"
            type="password"
          />
          <Select name="role" label="Tipo de Rol">
            <option>Seleccione un rol</option>
            <option value="ADMIN">Administrador</option>
            <option value="LEADER">Líder de proyecto</option>
            <option value="STUDENT">Estudiante</option>
          </Select>
          <Button color="primary" type="submit">
            Registarse
          </Button>
          <br />
          <br />
          <Button color="primary">Iniciar Sesión</Button>
        </Form>
      </Formik>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

const mapDispatchToProps = {
  signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
