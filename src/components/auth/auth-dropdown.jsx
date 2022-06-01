import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const AuthDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Dropdown isOpen={isOpen} toggle={toggleDropdown}>
      <DropdownToggle caret>Auth</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Login</DropdownItem>
        <DropdownItem>Register</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AuthDropdown;
