import React from "react";
import { Nav, NavItem } from "reactstrap";
import { Outlet } from "react-router-dom";

import NavLink from "./nav-link";

const Layout = () => {
  return (
    <div className="page-wrapper">
      <Nav tabs>
        <NavLink url="/rooms" />
        <NavItem>Tasks</NavItem>
        <NavItem>Schedule</NavItem>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
