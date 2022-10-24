import React from "react";
import "../components/TopSelling.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { topProducts } from "../data/data";
import { dressProducts } from "../data/data";

function TopSelling({ addProducts }) {
  return (
    <div className="container1">
      <div className="selling">
        <div className="topSelling">
          <div className="top">
            <p>Top selling items</p>
            <div className="gamesRight1">
              <p>SEE ALL</p>
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="topCard">
            {topProducts.map((product) => {
              return (
                <div className="topSellingCards" key={product.id}>
                  <div className="topSellingCard">
                    <img src={product.image} alt={product.image} />
                    <p>{product.title}</p>
                    <p>Ksh {product.price}</p>
                    <s>Ksh {product.price2}</s>
                    <button onClick={() => addProducts(topProducts)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* dress container */}

        <div className="topSelling">
          <div className="top">
            <p>Women Dresses</p>
            <div className="gamesRight1">
              <p>SEE ALL</p>
              <KeyboardArrowRightIcon />
            </div>
          </div>
          <div className="topCard">
            {dressProducts.map((product) => {
              return (
                <div className="topSellingCards" key={product.id}>
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
        </div>
      </div>

      <div className="gaming1">
        <img src="images/gaming/Playstation_Sales.jpg" alt="gaming" />
      </div>
    </div>
  );
}

export default TopSelling;
