import React from "react";
import { NavItem, NavLink as RSLink } from "reactstrap";
import { useLocation } from "react-router-dom";

const NavLink = ({ url }) => {
  const location = useLocation();
  console.log(location);

  return (
    <NavItem>
      <RSLink href={url} active={url === location.pathname}>
        Rooms
      </RSLink>
    </NavItem>
  );
};

export default NavLink;
