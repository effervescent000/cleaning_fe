import React, { useState } from "react";
import { useSelector } from "react-redux";

import TasksWrapper from "./tasks-wrapper";
import TaskModal from "./task-modal";

const TasksPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const tasks = useSelector((state) => state.tasks);

  const toggle = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      {tasks.length ? <TasksWrapper tasks={tasks} /> : <>No tasks added!</>}
      <TaskModal isOpen={modalIsOpen} toggle={toggle} />
      <button data-cy="add-task" onClick={toggle}>
        +
      </button>
    </div>
  );
};

export default TasksPage;
