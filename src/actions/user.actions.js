import { userConstants } from "../constants/user.constants";

export const setUser = (user) => ({
  type: userConstants.SET_USER,
  payload: user,
});
