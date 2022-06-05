import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-final-form";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import apiService from "../../utils/api-service";
import { urls } from "../../constants/constants";
import { addTask, replaceTask } from "../../actions/tasks.actions";

import TextInputField from "../form-components/text-input";
import SelectField from "../form-components/select-field";
import CheckboxInput from "../form-components/checkbox-input";
import RadioInputGroup from "../form-components/radio-button-group";

const TaskModal = ({ isOpen, toggle, task }) => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);

  const roomKeyValues = rooms.map((room) => ({ value: room.id, name: room.label }));

  const onSubmit = (values) => {
    if (task) {
      apiService.PUT(urls.TASKS(task.id), values, (response) => {
        dispatch(replaceTask(response.data));
        toggle();
      });
    } else {
      apiService.POST(urls.TASKS(), values, (response) => {
        dispatch(addTask(response.data));
        toggle();
      });
    }
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
              <RadioInputGroup name="points" groupLabel="Effort points" values={[1, 2, 3]} />
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
