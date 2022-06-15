import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTaskAndUpdate } from "../../actions/tasks.actions";

import TaskModal from "./task-modal";

const TaskCard = ({ task, room }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggle = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="d-flex">
      <div className="task-columns">
        <div>{task.label}</div>
        <div>{room && room.label}</div>
        <div>{task.points}</div>
        <div>{task.period}</div>
        <div>{task.last_done}</div>
      </div>

      <button data-cy="edit" onClick={toggle}>
        Edit
      </button>
      <button data-cy="delete" onClick={() => dispatch(deleteTaskAndUpdate(task.id))}>
        Delete
      </button>
      <TaskModal isOpen={modalIsOpen} toggle={toggle} task={task} />
    </div>
  );
};

export default TaskCard;
