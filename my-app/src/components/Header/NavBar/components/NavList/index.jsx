import { Nav } from "reactstrap";

import NavItem from "../NavItem";

const NavList = () => {
  return (
    <Nav className="me-auto" navbar>
      <NavItem to="/profile">Perfil</NavItem>
      <NavItem to="/users">Usuarios</NavItem>
      <NavItem to="/Projects">Proyectos</NavItem>
    </Nav>
  );
};

export default NavList;
