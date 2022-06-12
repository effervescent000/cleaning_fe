import React, { useState } from "react";
import { useSelector } from "react-redux";

import RoomModal from "./room-modal";
import RoomsWrapper from "./rooms-wrapper";

const RoomPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rooms = useSelector((state) => state.rooms);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {rooms.length ? (
        <>
          <RoomsWrapper rooms={rooms} />
        </>
      ) : (
        <>No rooms added!</>
      )}
      <RoomModal isOpen={isOpen} toggle={toggle} />
      <button name="add-room-button" onClick={toggle}>
        +
      </button>
    </div>
  );
};

export default RoomPage;
