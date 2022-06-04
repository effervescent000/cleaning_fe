import { taskConstants } from "../constants/tasks.constants";

const baseState = [];

const tasksReducer = (state = baseState, action) => {
  switch (action.type) {
    case taskConstants.SET_TASKS:
      return [...action.payload];
    case taskConstants.ADD_TASK:
      return [...state, action.payload];
    case taskConstants.REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    case taskConstants.REPLACE_TASK:
      return [...state.filter((task) => task.id !== action.payload.id), action.payload];
    default:
      return state;
  }
};

export default tasksReducer;
