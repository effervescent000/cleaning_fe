import React from "react";
import { useSelector, useDispatch } from "react-redux";

const RoomPage = () => {
  const rooms = useSelector((state) => state.rooms);

  return (
    <div>
      {rooms.length ? <>Nothing here yet!</> : <>No rooms added!</>}
      <button>+</button>
    </div>
  );
};

export default RoomPage;
