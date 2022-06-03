import React, { useState } from "react";
import { useSelector } from "react-redux";

import TaskModal from "./task-modal";

const TasksPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggle = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      {tasks.length ? <>Nothing here yet.</> : <>No tasks added!</>}
      <TaskModal isOpen={modalIsOpen} toggle={toggle} />
      <button onClick={toggle}>+</button>
    </div>
  );
};

export default TasksPage;
