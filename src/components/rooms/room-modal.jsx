import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-final-form";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import apiService from "../../utils/api-service";
import { roomTypesKeyValues, urls } from "../../constants/constants";
import { addRoom, replaceRoom } from "../../actions/rooms.actions";

import TextInputField from "../form-components/text-input";
import SelectField from "../form-components/select-field";

const RoomModal = ({ isOpen, toggle, room }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    if (room) {
      apiService.PUT(urls.ROOMS(room.id), values, (response) => {
        dispatch(replaceRoom(response.data));
        toggle();
      });
    } else {
      apiService.POST(urls.ROOMS(), values, (response) => {
        dispatch(addRoom(response.data));
        toggle();
      });
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Add a room</ModalHeader>
      <Form
        onSubmit={onSubmit}
        initialValues={room && { ...room }}
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
