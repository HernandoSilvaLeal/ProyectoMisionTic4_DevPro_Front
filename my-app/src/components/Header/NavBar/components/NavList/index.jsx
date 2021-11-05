import { Nav } from "reactstrap";

import NavItem from "../NavItem";

const NavList = () => {
  return (
    <Nav className="me-auto" navbar>
      <NavItem to="/profile">Perfil</NavItem>
      <NavItem to="/users">Usuarios</NavItem>
      <NavItem to="/projects">Proyectos</NavItem>
      <NavItem to="/requests">Requests</NavItem>
    </Nav>
  );
};

export default NavList;
