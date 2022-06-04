import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-final-form";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import apiService from "../../utils/api-service";
import { urls } from "../../constants/constants";
import { addTask } from "../../actions/tasks.actions";

import TextInputField from "../form-components/text-input";
import SelectField from "../form-components/select-field";
import CheckboxInput from "../form-components/checkbox-input";

const TaskModal = ({ isOpen, toggle, task }) => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);

  const roomKeyValues = rooms.map((room) => ({ value: room.id, name: room.label }));

  const onSubmit = (values) => {
    const callback = (response) => {
      dispatch(addTask(response.data));
      toggle();
    };
    apiService.POST(urls.TASKS, values, callback);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Add a task</ModalHeader>
      <Form
        onSubmit={onSubmit}
        initialValues={task && { ...task }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <SelectField name="room_id" label="Room" options={roomKeyValues} />
              <TextInputField name="label" label="Task label" />
              <TextInputField name="points" label="Effort points" />
              <CheckboxInput name="partial_effort" label="Partial effort enabled?" />
              <TextInputField name="period" label="Every X days" />
              <TextInputField name="note" label="Comment" />
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

export default TaskModal;
