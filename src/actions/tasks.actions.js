import { taskConstants } from "../constants/tasks.constants";

export const setTasks = (tasks) => ({
  type: taskConstants.SET_TASKS,
  payload: tasks,
});

export const addTask = (task) => ({
  type: taskConstants.ADD_TASK,
  payload: task,
});

export const removeTask = (task) => ({
  type: taskConstants.REMOVE_TASK,
  payload: task,
});
