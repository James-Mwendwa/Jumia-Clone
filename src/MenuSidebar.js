import React from "react";
import "./MenuSidebar.css";

function MenuSidebar() {
  return (
    <div className="menuSidebar">
      <div className="menuLinks">
        <a href="https://www.jumia.co.ke/groceries/">Supermarket</a>
        <a href="">Health &amp; Beauty</a>
        <a href="">Home &amp; Office</a>
        <a href="">Phones &amp; Tablets</a>
        <a href="">Computing</a>
        <a href="">Electronics</a>
        <a href="">Fashion</a>
        <a href="">Gaming</a>
        <a href="">Baby Products</a>
        <a href="">Sporting Goods</a>
        <a href="">Garden &amp; Outdoors</a>
        <a href="">Other categories</a>
      </div>

      <div className="menuSlider">
        <img src="images/Electricity.jpg" alt="png" />
      </div>
    </div>
  );
}

export default MenuSidebar;
