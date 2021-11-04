import { connect } from "react-redux";
import NavBar from "./NavBar/NavBar";

const Header = (props) => {
  return <NavBar {...props} />;
};

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
