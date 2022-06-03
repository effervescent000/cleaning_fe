import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/user";
import roomsReducer from "./reducers/rooms";
import tasksReducer from "./reducers/tasks";

const store = configureStore({
  reducer: {
    user: userReducer,
    rooms: roomsReducer,
    tasks: tasksReducer,
  },
});

export { store };
