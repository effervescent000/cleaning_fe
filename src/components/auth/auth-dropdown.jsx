import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import jsCookie from "js-cookie";

import { userLoggedIn } from "../../utils/utils";
import { setUser } from "../../actions/user.actions";

import AuthModal from "./auth-modal";

const AuthDropdown = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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
          {userLoggedIn(user) ? (
            <DropdownItem
              onClick={() => {
                jsCookie.remove("access_token_cookie");
                jsCookie.remove("csrf_access_token");
                dispatch(setUser({}));
              }}
            >
              Logout
            </DropdownItem>
          ) : (
            <>
              <DropdownItem onClick={() => toggleModal()}>Login</DropdownItem>
              <DropdownItem onClick={() => toggleModal(true)}>Register</DropdownItem>
            </>
          )}
        </DropdownMenu>
      </Dropdown>
      <AuthModal isOpen={modalIsOpen} toggle={toggleModal} newUser={newUser} />
    </>
  );
};

export default AuthDropdown;
