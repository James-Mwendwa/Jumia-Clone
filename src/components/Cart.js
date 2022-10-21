import React, { useState } from "react";
import "./Cart.css";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Cart() {
  const [addItem, setAddItem] = useState(0);

  return (
    <div className="cart">
      <div className="cartBanner">
        <div className="cartCard">
          <div className="cartCount">
            <p>Cart (2)</p>
          </div>

          <div className="itemCard">
            <div className="itemCardLeft">
              <div className="itemContainer">
                <img src="images/gaming/PS2.jpg" alt="" />
                <p>Fifa Pro</p>
              </div>

              <span>
                <DeleteOutlineIcon />
                <button onClick={() => setAddItem(addItem - 1)}>REMOVE</button>
              </span>
            </div>

            <div className="itemCardRight">
              <h3>Ksh 5,999</h3>
              <div className="itemCardAdd">
                <button>
                  <RemoveIcon className="itemIcon" />
                </button>
                <span>{addItem}</span>
                <button onClick={() => setAddItem(addItem + 1)}>
                  <AddIcon className="itemIcon" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="amountCard">
          <div className="cartSummary">
            <p>CART SUMMARY</p>
          </div>

          <div className="subTotal">
            <p>Subtotal</p>
            <h2>Ksh 68,999</h2>
          </div>

          <div className="amountCheckout">
            <button>CHECKOUT (Ksh 68,999)</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
