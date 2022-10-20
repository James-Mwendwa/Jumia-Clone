import React from "react";
import "./TopSelling.css";
import AddCart from "./AddCart";
import { topProducts } from "./data/data";

function TopSelling() {
  return (
    <div className="container1">
      <div className="topSelling">
        <div className="topSellingTitle">
          <p>Top selling items</p>
        </div>

        {topProducts.map((product, index) => {
          return (
            <div className="topSellingCards" key={product.index}>
              <div className="topSellingCard">
                <img src={product.image} alt={product.image} />
                <p>{product.title}</p>
                <p>Ksh {product.price}</p>
                <s>Ksh {product.price2}</s>
              </div>
            </div>
          );
        })}
      </div>

      {/* 



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
      </div> */}
    </div>
  );
}

export default TopSelling;
