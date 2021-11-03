import React, { Component } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

import { logOut } from "../../../actions/authAction";
export default class NavBar extends Component {
  render() {
    const doLogout = () => logOut();
    return (
      <div>
        <Navbar color="success" expand="sm" dark>
          <NavbarBrand href="/home">Software PRASI</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/profile">Perfil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="users">Usuarios</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Proyectos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/requests">Solicitudes</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              Nombre del Usuario
              <button onClick={doLogout}>Cerrar Sesión</button>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
