import React from "react";
import "./CheckoutCard.css";

function CheckoutCard() {
  return (
    <div className="checkout">
      <div className="checkoutCenter">
        <h3>Your cart is empty!</h3>
        <p>Browse our categories and discover our best deals!</p>
        <button>START SHOPPING</button>
      </div>
    </div>
  );
}

export default CheckoutCard;
