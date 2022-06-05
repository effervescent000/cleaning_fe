import React, { useState } from "react";

import TaskModal from "./task-modal";

const TaskCard = ({ task }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggle = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      {task.label}
      <button onClick={toggle}>Edit</button>
      <TaskModal isOpen={modalIsOpen} toggle={toggle} task={task} />
    </div>
  );
};

export default TaskCard;
