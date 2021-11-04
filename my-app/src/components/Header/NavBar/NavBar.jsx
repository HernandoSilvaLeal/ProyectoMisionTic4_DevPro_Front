import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from "reactstrap";

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
            {props.user.name}
            <button onClick={doLogout}>Cerrar Sesión</button>
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
