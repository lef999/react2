import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap styles
import PlayersList from "./PlayersList"; // PlayersList component

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
