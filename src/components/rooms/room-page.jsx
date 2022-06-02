import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import RoomModal from "./room-modal";

const RoomPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rooms = useSelector((state) => state.rooms);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {rooms.length ? <>Nothing here yet!</> : <>No rooms added!</>}
      <RoomModal isOpen={isOpen} toggle={toggle} />
      <button onClick={toggle}>+</button>
    </div>
  );
};

export default RoomPage;
