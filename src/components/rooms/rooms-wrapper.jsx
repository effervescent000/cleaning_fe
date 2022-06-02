import React from "react";

import RoomCard from "./room-card";

const RoomsWrapper = ({ rooms }) => {
  return (
    <div>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
};

export default RoomsWrapper;
