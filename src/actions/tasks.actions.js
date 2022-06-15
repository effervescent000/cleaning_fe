import { urls } from "../constants/constants";
import { taskConstants } from "../constants/tasks.constants";
import apiService from "../utils/api-service";

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

export const replaceTask = (task) => ({
  type: taskConstants.REPLACE_TASK,
  payload: task,
});

export const deleteTaskAndUpdate = (id) => (dispatch) => {
  apiService.DELETE(urls.TASKS(id), (response) => dispatch(setTasks(response.data)));
};
