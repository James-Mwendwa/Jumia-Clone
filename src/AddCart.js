import React from "react";
import "./AddCart.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function AddCart() {
  return (
    <div className="addCart">
      <AddShoppingCartIcon />
      <button>ADD TO CART</button>
    </div>
  );
}

export default AddCart;
