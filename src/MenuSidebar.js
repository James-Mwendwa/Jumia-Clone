import React from "react";
import "./MenuSidebar.css";
import { Link } from "react-router-dom";

function MenuSidebar() {
  return (
    <div className="menuSidebar">
      <div className="menuLinks">
        <Link to="https://www.jumia.co.ke/groceries/">Supermarket</Link>
        <Link to="//">Health &amp; Beauty</Link>
        <Link to="//">Home &amp; Office</Link>
        <Link to="//">Phones &amp; Tablets</Link>
        <Link to="//">Computing</Link>
        <Link to="//">Electronics</Link>
        <Link to="//">Fashion</Link>
        <Link to="/gaming">Gaming</Link>
        <Link to="//">Baby Products</Link>
        <Link to="//">Sporting Goods</Link>
        <Link to="//">Garden &amp; Outdoors</Link>
        <Link to="//">Other categories</Link>
      </div>

      <div className="menuSlider">
        <img src="images/Electricity.jpg" alt="png" />
      </div>

      <div className="menu-left">
        <div className="menu-leftCard">
          <div className="menu-leftCardDesc">
            <div className="menuIcon">
              <img src="images/help.png" alt="png" />
            </div>
            <div className="menuDesc">
              {" "}
              <h2> HELP CENTER</h2>
              <p>Guide To Customer Care</p>
            </div>
          </div>

          <div className="menu-leftCardDesc">
            <div className="menuIcon">
              {" "}
              <img src="images/return.png" alt="png" />
            </div>
            <div className="menuDesc">
              <h2> EASY RETURN</h2>
              <p>Quick Refund</p>
            </div>
          </div>

          <div className="menu-leftCardDesc">
            <div className="menuIcon">
              <img src="images/sell.png" alt="png" />
            </div>
            <div className="menuDesc">
              {" "}
              <h2>SELL ON JUMIA</h2>
              <p>Millions Of Visitors</p>
            </div>
          </div>
        </div>

        <div className="menu-leftOffer">
          <h1>5</h1>
          <p>
            days <br></br>to go
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuSidebar;
