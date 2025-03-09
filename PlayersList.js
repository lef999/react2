import React from "react";
import Player from "./Player"; // Import Player component
import players from "./players"; // Import players data

const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "20px" }}>
      {players.map((player, index) => (
        <Player key={index} {...player} /> // Spread player data as props
      ))}
    </div>
  );
};

export default PlayersList;
