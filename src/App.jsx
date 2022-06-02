import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";

import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";

import APIService from "./utils/api-service";
import { urls } from "./constants/constants";
import { userConstants } from "./constants/user.constants";

import Layout from "./components/navigation/layout";
import RoomPage from "./components/rooms/room-page";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.username) {
      APIService.GET(urls.CHECK, (response) =>
        dispatch({ type: userConstants.SET_USER, payload: response.data })
      );
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="rooms" element={<RoomPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
