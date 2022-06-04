import React from "react";

import TaskCard from "./task-card";

const TasksWrapper = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksWrapper;
