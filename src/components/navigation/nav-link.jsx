import React from "react";
import { NavItem } from "reactstrap";
import { NavLink as RouterLink } from "react-router-dom";

const NavLink = ({ url, label }) => {
  // const location = useLocation();

  return (
    <NavItem>
      <RouterLink to={url} className="nav-link">
        {label}
      </RouterLink>
    </NavItem>
  );
};

export default NavLink;
