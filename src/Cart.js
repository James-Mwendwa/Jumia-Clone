import React from "react";
import "./Cart.css";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Cart() {
  return (
    <div className="cart">
      <div className="cartCard">
        <div className="cartCount">
          <p>Cart (2)</p>
        </div>

        <div className="itemCard">
          <div className="itemCardLeft">
            <img src="images/gaming/PS2.jpg" alt="" />
            <span>
              <DeleteOutlineIcon />
              <button>REMOVE</button>
            </span>
          </div>

          <div className="itemCardRight">
            <h3>Ksh 5,999</h3>
            <div className="itemCardAdd">
              <span>
                <RemoveIcon className="itemIcon" /> 1{" "}
                <AddIcon className="itemIcon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
