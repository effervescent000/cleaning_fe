import React, { useState } from "react";

import TaskModal from "./task-modal";

const TaskCard = ({ task, room }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggle = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <div className="task-columns">
        <span>Task</span>
        <span>Room</span>
        <span>Effort points</span>
        <span>Repeat</span>
        <span>Last completed</span>
      </div>
      <div className="d-flex">
        <div className="task-columns">
          <div>{task.label}</div>
          <div>{room.label}</div>
          <div>{task.points}</div>
          <div>{task.period}</div>
          <div>{task.last_done}</div>
        </div>

        <button onClick={toggle}>Edit</button>
        <TaskModal isOpen={modalIsOpen} toggle={toggle} task={task} />
      </div>
    </>
  );
};

export default TaskCard;
