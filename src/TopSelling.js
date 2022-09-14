import React from "react";
import "./TopSelling.css";
import AddCart from "./AddCart";

function TopSelling() {
  return (
    <div className="container1">
      <div className="digitalGames1">
        <div className="digitalGamesTop1">
          <p>Top selling items</p>
        </div>

        <div className="digitalGamesCards1">
          <div className="gamesCard1">
            <img src="images/Top-selling/1.jpg" alt="" />
            <p>Vision Plus Frameless...</p>
            <p>Ksh 10,999</p>
            <s>Ksh 16,500</s>
            <AddCart />
          </div>

          <div className="gamesCard1">
            <img src="images/Top-selling/2.jpg" alt="" />
            <p>Techo CAMON</p>
            <p>Ksh 22,999</p>
            <s>Ksh 26,500</s>
            <AddCart />
          </div>

          <div className="gamesCard1">
            <img src="images/Top-selling/3.jpg" alt="" />
            <p>Sony PSN Wallet Top Up...</p>
            <p>Ksh 3,999</p>
            <s>Ksh 4,800</s>
            <AddCart />
          </div>

          <div className="gamesCard1">
            <img src="images/Top-selling/4.jpg" alt="" />
            <p>Generic Pop Station</p>
            <p>Ksh 799</p>
            <s>Ksh 1,500</s>
            <AddCart />
          </div>

          <div className="gamesCard1">
            <img src="images/Top-selling/5.jpg" alt="" />
            <p>Generic BRICK LCD</p>
            <p>Ksh 689</p>
            <s>Ksh 1,378</s>
            <AddCart />
          </div>

          <div className="gamesCard1">
            <img src="images/Top-selling/6.jpg" alt="" />
            <p>Otvo Dual PS4 Controller</p>
            <p>Ksh 1,649</p>
            <s>Ksh 3,000</s>
            <AddCart />
          </div>
        </div>
      </div>

      <div className="digitalGames1">
        <div className="digitalGamesTop1">
          <p>Women Dresses</p>
        </div>

        <div className="digitalGamesCards1">
          <div className="gamesCard1">
            <img src="images/Top-selling/women1.jpg" alt="" />
            <p>Fashion Ladies Official...</p>
            <p>Ksh 2,899</p>
            <s>Ksh 5,000</s>
            <AddCart />
          </div>

          <div className="gamesCard1">
            <img src="images/Top-selling/women2.jpg" alt="" />
            <p>Fashion Women's Office...</p>
            <p>Ksh 2,850</p>
            <s>3,700</s>
            <AddCart />
          </div>

          <div className="gamesCard1">
            <img src="images/Top-selling/women3.jpg" alt="" />
            <p>Fashion Ladies Long...</p>
            <p>Ksh 3,299</p>
            <s>Ksh 4,500</s>
            <AddCart />
          </div>

          <div className="gamesCard1">
            <img src="images/Top-selling/women4.jpg" alt="" />
            <p>Fashion Women's Floral...</p>
            <p>Ksh 2,200</p>
            <s>Ksh 3,550</s>
            <AddCart />
          </div>

          <div className="gamesCard1">
            <img src="images/Top-selling/women5.jpg" alt="" />
            <p>Fashion Ladies Dress...</p>
            <p>Ksh 2,600</p>
            <s>Ksh 3,600</s>
            <AddCart />
          </div>

          <div className="gamesCard1">
            <img src="images/Top-selling/women6.jpg" alt="" />
            <p>Fashion Ladies Short</p>
            <p>Ksh 2,850</p>
            <s>Ksh 4,500</s>
            <AddCart />
          </div>
        </div>
      </div>
      <div className="gaming1">
        <img src="images/gaming/Playstation_Sales.jpg" alt="gaming" />
      </div>
    </div>
  );
}

export default TopSelling;
