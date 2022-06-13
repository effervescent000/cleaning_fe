import React, { useState } from "react";

import RoomModal from "./room-modal";

const RoomCard = ({ room }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggle = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="room-card">
      <span>{room.label}</span>
      <button className="edit-btn" onClick={toggle}>
        Edit
      </button>
      <button className="delete-btn">Delete</button>
      <RoomModal isOpen={modalIsOpen} toggle={toggle} room={room} />
    </div>
  );
};

export default RoomCard;
