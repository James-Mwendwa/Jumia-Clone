import React from "react";
import "./Gaming.css";
import PlayStationCard from "./PlayStationCard";

function Gaming() {
  return (
    <div className="container">
      <div className="gaming">
        <img src="images/gaming/Gaming_Center.jpg" alt="gaming" />
      </div>

      <PlayStationCard />
    </div>
  );
}

export default Gaming;
