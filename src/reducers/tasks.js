import { taskConstants } from "../constants/tasks.constants";

const baseState = [];

const tasksReducer = (state = baseState, action) => {
  switch (action.type) {
    case taskConstants.SET_TASKS:
      return [...action.payload];
    case taskConstants.ADD_TASK:
      return [...state, action.payload];
    case taskConstants.REMOVE_TASK:
      return state.filter((room) => room.id !== action.payload.id);
    default:
      return state;
  }
};

export default tasksReducer;
