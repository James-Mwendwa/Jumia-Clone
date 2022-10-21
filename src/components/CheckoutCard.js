import React from "react";
import "../components/CheckoutCard.css";

function CheckoutCard() {
  return (
    <div className="checkout">
      <div className="checkoutCenter">
        <img
          src="https://play-lh.googleusercontent.com/EilZ1rSlx3NtAxIOhLc3ri7Ve49GYT-Qo5G7d5gxNmgObP7uL7k48BV4v8XBEpILAv4"
          alt=""
        />
        <h3>Your cart is empty!</h3>
        <p>Browse our categories and discover our best deals!</p>
        <button>START SHOPPING</button>
      </div>
    </div>
  );
}

export default CheckoutCard;
