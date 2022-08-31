import React from "react";
import "./PlayStationCard.css";

function PlayStationCard() {
  return (
    <div className="playStations">
      <div className="playCard">
        <img src="images/gaming/PS55.jpg" alt="PS5" />
        <p>PS5</p>
      </div>

      <div className="playCard">
        <img src="images/gaming/PS44.jpg" alt="PS5" />
        <p>PS4</p>
      </div>

      <div className="playCard">
        <img src="images/gaming/PS33.jpg" alt="PS5" />
        <p>PS3</p>
      </div>

      <div className="playCard">
        <img src="images/gaming/PSP.jpg" alt="PS5" />
        <p>PSP</p>
      </div>

      <div className="playCard">
        <img src="images/gaming/Xbox.jpg" alt="PS5" />
        <p>XBOX 360</p>
      </div>

      <div className="playCard">
        <img src="images/gaming/XBOXONE.jpg" alt="PS5" />
        <p>XBOX One</p>
      </div>
    </div>
  );
}

export default PlayStationCard;
