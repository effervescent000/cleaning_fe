import { userConstants } from "../constants/user.constants";

const baseState = {
  id: 0,
  username: "",
  role: "",
};

const userReducer = (state = baseState, action) => {
  switch (action.type) {
    case userConstants.SET_USER:
      return { ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
