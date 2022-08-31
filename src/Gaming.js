import React from "react";
import "./Gaming.css";
import PlayStationCard from "./PlayStationCard";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Gaming() {
  return (
    <div className="container">
      <div className="gaming">
        <img src="images/gaming/Gaming_Center.jpg" alt="gaming" />
      </div>

      <PlayStationCard />

      <div className="digitalGames">
        <div className="digitalGamesTop">
          <p>Digital Games</p>
          <div className="gamesRight">
            <p>SEE ALL</p>
            <KeyboardArrowRightIcon />
          </div>
        </div>

        <div className="digitalGamesCards">
          <div className="gamesCard">
            <img src="images/gaming/gaming1.jpg" alt="" />
            <p>Sony PSN Wallet Top Up...</p>
            <p>Ksh 3,999</p>
            <s>Ksh 4,500</s>
          </div>

          <div className="gamesCard">
            <img src="images/gaming/gaming2.jpg" alt="" />
            <p>Fifa FIFA 20 PS4</p>
            <p>Ksh 5,999</p>
          </div>

          <div className="gamesCard">
            <img src="images/gaming/gaming3.jpg" alt="" />
            <p>Sony PSN Wallet Top Up...</p>
            <p>Ksh 3,999</p>
            <s>Ksh 4,800</s>
          </div>

          <div className="gamesCard">
            <img src="images/gaming/gaming4.jpg" alt="" />
            <p>Generic Pop Station</p>
            <p>Ksh 799</p>
            <s>Ksh 1,500</s>
          </div>

          <div className="gamesCard">
            <img src="images/gaming/gaming5.jpg" alt="" />
            <p>Generic BRICK LCD</p>
            <p>Ksh 689</p>
            <s>Ksh 1,378</s>
          </div>

          <div className="gamesCard">
            <img src="images/gaming/gaming6.jpg" alt="" />
            <p>Otvo Dual PS4 Controller</p>
            <p>Ksh 1,649</p>
            <s>Ksh 3,000</s>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gaming;
