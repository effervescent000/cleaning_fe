import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/user";
import roomsReducer from "./reducers/rooms";

const store = configureStore({
  reducer: {
    user: userReducer,
    rooms: roomsReducer,
  },
});

export { store };
