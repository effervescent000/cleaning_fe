import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import AuthModal from "./auth-modal";

const AuthDropdown = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newUser, setNewUser] = useState(false);

  const toggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const toggleModal = (newUserArg = false) => {
    setModalIsOpen(!modalIsOpen);
    setNewUser(newUserArg);
  };

  return (
    <>
      <Dropdown isOpen={dropdownIsOpen} toggle={toggleDropdown}>
        <DropdownToggle caret>Auth</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => toggleModal()}>Login</DropdownItem>
          <DropdownItem onClick={() => toggleModal(true)}>Register</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <AuthModal isOpen={modalIsOpen} toggle={toggleModal} newUser={newUser} />
    </>
  );
};

export default AuthDropdown;
