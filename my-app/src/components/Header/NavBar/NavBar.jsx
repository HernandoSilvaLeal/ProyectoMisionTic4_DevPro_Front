import React, { Component } from "react";
import { Link } from "react-router-dom";
import { 
  Collapse,
  Nav,
  Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink,
 } from 'reactstrap';

export default class NavBar extends Component {
  render() {

    return (
      <div>
  <Navbar
    color="success"
    expand="sm"
    dark
    hover
  >
    <NavbarBrand href="/home">
      Software PRASI
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/profile">
            Perfil
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="users">
            Usuarios
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/projects">
            Proyectos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/requests">
            Solicitudes
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarText>
        Nombre del Usuario
        <Link to="/">
          Cerrar Sesión
        </Link>
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
    )
  }
}