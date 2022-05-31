import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";

import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";

import Layout from "./components/navigation/layout";
import RoomPage from "./components/rooms/room-page";

const App = () => {
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
