import React, { useState } from "react";

import RoomModal from "./room-modal";

const RoomCard = ({ room }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggle = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <span>{room.label}</span>
      <button onClick={toggle}>Edit</button>
      <RoomModal isOpen={modalIsOpen} toggle={toggle} room={room} />
    </div>
  );
};

export default RoomCard;
