import { roomConstants } from "../constants/rooms.constants";

export const setRooms = (rooms) => ({
  type: roomConstants.SET_ROOMS,
  payload: rooms,
});

export const addRoom = (room) => ({
  type: roomConstants.ADD_ROOM,
  payload: room,
});

export const removeRoom = (room) => ({
  type: roomConstants.REMOVE_ROOM,
  payload: room,
});

export const replaceRoom = (room) => ({
  type: roomConstants.REPLACE_ROOM,
  payload: room,
});
