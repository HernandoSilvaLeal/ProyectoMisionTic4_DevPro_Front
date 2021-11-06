import { connect } from "react-redux";
import {
  Button,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from "reactstrap";

import "./NavBar.css"

import NavList from "./components/NavList";

import { logOut } from "../../../actions/authAction";

const NavBar = (props) => {
  const doLogout = () => {
    props.logOut();
  };

  return (
    <div>
      <Navbar color="success" expand="sm" dark>
        <NavbarBrand href="/home">Software PRASI</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <NavList />
          <NavbarText>
            <div className="userN">
            {props.user.name}
            </div>
            <Button
            color="dark"
            onClick={doLogout}>Cerrar Sesión</Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
