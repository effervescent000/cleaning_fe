import { roomConstants } from "../constants/rooms.constants";

const baseState = [];

const roomsReducer = (state = baseState, action) => {
  switch (action.type) {
    case roomConstants.SET_ROOMS:
      return [...action.payload];
    case roomConstants.ADD_ROOM:
      return [...state, action.payload];
    case roomConstants.REMOVE_ROOM:
      return state.filter((room) => room.id !== action.payload.id);
    case roomConstants.REPLACE_ROOM:
      return [...state.filter((room) => room.id !== action.payload.id), action.payload];
    default:
      return state;
  }
};

export default roomsReducer;
