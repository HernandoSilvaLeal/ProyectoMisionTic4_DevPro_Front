import { NavLink } from "react-router-dom";

import "./index.css";

const NavItem = ({ to, children }) => {
  return (
    <NavLink to={to} className="navlink" activeClassName="selected">
      {children}
    </NavLink>
  );
};

export default NavItem;
