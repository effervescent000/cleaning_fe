import React from "react";
import { Nav, NavItem } from "reactstrap";
import { Outlet } from "react-router-dom";

import AuthDropdown from "../auth/auth-dropdown";
import NavLink from "./nav-link";

const Layout = () => {
  return (
    <div className="page-wrapper">
      <Nav tabs>
        <NavLink url="/rooms" label="Rooms" />
        <NavLink url="/tasks" label="Tasks" />
        <NavItem>Schedule</NavItem>
        <AuthDropdown />
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
