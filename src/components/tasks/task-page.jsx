import React, { useState } from "react";
import { useSelector } from "react-redux";

const TasksPage = () => {
  const tasks = useSelector((state) => state.tasks);
  return <div>{tasks.length ? <>Nothing here yet.</> : <>No tasks added!</>}</div>;
};

export default TasksPage;
