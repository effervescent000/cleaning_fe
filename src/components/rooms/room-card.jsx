import React, { useState } from "react";
import { useDispatch } from "react-redux";

import RoomModal from "./room-modal";
import { deleteRoomAndUpdate } from "../../actions/rooms.actions";

const RoomCard = ({ room }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggle = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="room-card">
      <span>{room.label}</span>
      <button className="edit-btn" data-cy="edit" onClick={toggle}>
        Edit
      </button>
      <button
        className="delete-btn"
        data-cy="delete"
        onClick={() => dispatch(deleteRoomAndUpdate(room.id))}
      >
        Delete
      </button>
      <RoomModal isOpen={modalIsOpen} toggle={toggle} room={room} />
    </div>
  );
};

export default RoomCard;
