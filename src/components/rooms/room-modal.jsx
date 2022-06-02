import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-final-form";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import apiService from "../../utils/api-service";
import { roomTypesKeyValues, urls } from "../../constants/constants";
import { roomConstants } from "../../constants/rooms.constants";

import TextInputField from "../form-components/text-input";
import SelectField from "../form-components/select-field";

const RoomModal = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const callback = (response) => {
      dispatch({ type: roomConstants.ADD_ROOM, payload: response.data });
      toggle();
    };
    apiService.POST(urls.ROOMS, values, callback);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Add a room</ModalHeader>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <SelectField label="Room type" name="type" options={roomTypesKeyValues} />
              <TextInputField name="label" label="Room name" />
            </ModalBody>
            <ModalFooter>
              <button type="submit">Save</button>
            </ModalFooter>
          </form>
        )}
      />
    </Modal>
  );
};

export default RoomModal;
