import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const AuthModal = ({ isOpen, toggle }) => {
  return (
    <Modal toggle={toggle}>
      <ModalHeader>Login/Register</ModalHeader>
    </Modal>
  );
};

export default AuthModal;
