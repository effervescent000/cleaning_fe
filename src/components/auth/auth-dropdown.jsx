import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import AuthModal from "./auth-modal";

const AuthDropdown = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <Dropdown isOpen={dropdownIsOpen} toggle={toggleDropdown}>
        <DropdownToggle caret>Auth</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Login</DropdownItem>
          <DropdownItem>Register</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <AuthModal isOpen={modalIsOpen} toggle={toggleModal} />
    </>
  );
};

export default AuthDropdown;
