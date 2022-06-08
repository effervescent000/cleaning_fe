import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import TaskCard from "./task-card";

const TasksWrapper = ({ tasks }) => {
  const rooms = useSelector((state) => state.rooms);
  const roomsLookup = useMemo(
    () => rooms.reduce((lookup, room) => ({ ...lookup, [room.id]: room }), {}),
    [rooms]
  );

  return (
    <div>
      <div className="task-columns">
        <span>Task</span>
        <span>Room</span>
        <span>Effort points</span>
        <span>Repeat</span>
        <span>Last completed</span>
      </div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} room={roomsLookup[task.room_id]} />
      ))}
    </div>
  );
};

export default TasksWrapper;
