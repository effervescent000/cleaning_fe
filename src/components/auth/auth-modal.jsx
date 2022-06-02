import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-final-form";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import APIService from "../../utils/api-service";
import { urls } from "../../constants/constants";
import { userConstants } from "../../constants/user.constants";

import TextInputField from "../form-components/text-input";

const AuthModal = ({ newUser, toggle, isOpen }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const callback = (response) =>
      dispatch({ type: userConstants.SET_USER, payload: response.data });
    APIService.POST(newUser ? urls.SIGNUP : urls.LOGIN, values, callback);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>{newUser ? "Register" : "Login"}</ModalHeader>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <TextInputField name="username" label="Username" />
              <TextInputField name="password" label="Password" />
              {newUser && <TextInputField name="confirmPassword" label="Password" />}
            </ModalBody>
            <ModalFooter>
              <div className="buttons-wrapper">
                <button type="button" onClick={toggle}>
                  Cancel
                </button>
                <button type="submit">Submit</button>
              </div>
            </ModalFooter>
          </form>
        )}
      />
    </Modal>
  );
};

export default AuthModal;
