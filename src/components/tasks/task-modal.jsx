import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-final-form";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import apiService from "../../utils/api-service";
import { urls } from "../../constants/constants";
import { addTask } from "../../actions/tasks.actions";

import TextInputField from "../form-components/text-input";
import CheckboxInput from "../form-components/checkbox-input";

const TaskModal = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();

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
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <ModalBody>
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
