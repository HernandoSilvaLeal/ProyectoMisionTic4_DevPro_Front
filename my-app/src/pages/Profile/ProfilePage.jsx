import { useState } from "react";
import { useMutation } from "@apollo/client";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Form, Formik } from "formik";

import Input from "../../components/Input";

import { signUp } from "../../actions/authAction";
import { UPDATE_PROFILE_MUTATION } from "../../services/GraphQL/mutations/user";

const ProfilePage = (props) => {
  const [form, setForm] = useState({ ...props.user });

  const [updateProfile] = useMutation(UPDATE_PROFILE_MUTATION);

  const handleSubmit = (values) => {
    setForm({ ...values });
    console.log({ form, values });
    updateProfile({ variables: form });
  };

  return (
    <div>
      <div className="ProfilePage">
        <Formik initialValues={form} onSubmit={handleSubmit}>
          <Form>
            <Input
              name="name"
              placeholder="Nombres y apellidos"
              type="string"
              label="Nombre"
            />
            <Input
              name="identification"
              placeholder="Numero de identificacion"
              type="string"
              label="Identificación"
            />
            <Input
              name="email"
              placeholder="Direccion de correo"
              type="string"
              label="Correo"
            />
            <Input
              name="password"
              placeholder="Digite su contraseña"
              label="Contraseña"
              type="password"
            />
            <Input
              name="confirmPassword"
              placeholder="Confirma tu contraseña"
              label="Confirmar contraseña"
              type="password"
            />
            <tp>Rol</tp>
            <br></br>
            <tp type="password">ADMIN</tp>
            <br></br>
            <tp></tp>
            <br></br>
            <Button color="primary" type="submit">
              GUARDAR
            </Button>
            <br />
            <br />
          </Form>
        </Formik>
      </div>
    </div>
  );
};
const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

const mapDispatchToProps = {
  signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
