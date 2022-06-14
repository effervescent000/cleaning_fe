import { roomConstants } from "../constants/rooms.constants";
import apiService from "../utils/api-service";
import { urls } from "../constants/constants";

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

export const fetchRooms = () => (dispatch) => {
  apiService.GET(urls.ROOMS(), (response) => dispatch(setRooms(response.data)));
};
