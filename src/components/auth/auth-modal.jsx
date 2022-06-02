import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const AuthModal = ({ isOpen, toggle, newUser }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>{newUser ? "Register" : "Login"}</ModalHeader>
    </Modal>
  );
};

export default AuthModal;
