import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";

import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";

import apiService from "./utils/api-service";
import { userLoggedIn } from "./utils/utils";
import { urls } from "./constants/constants";
import { userConstants } from "./constants/user.constants";
import { setTasks } from "./actions/tasks.actions";

import Layout from "./components/navigation/layout";
import RoomPage from "./components/rooms/room-page";
import TasksPage from "./components/tasks/task-page";
import { fetchRooms } from "./actions/rooms.actions";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!userLoggedIn(user)) {
      apiService.GET(urls.CHECK, (response) =>
        dispatch({ type: userConstants.SET_USER, payload: response.data })
      );
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (userLoggedIn(user)) {
      fetchData();
    }
  }, [user]);

  const fetchData = () => {
    dispatch(fetchRooms());
    apiService.GET(urls.TASKS(), (response) => dispatch(setTasks(response.data)));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="rooms" element={<RoomPage />} />
            <Route path="tasks" element={<TasksPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
