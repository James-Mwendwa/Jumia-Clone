import "./Cart.css";
import CheckoutCard from "./CheckoutCard";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Cart({ cartItems, handleRemoveProduct }) {
  const subTotal = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <>
      {cartItems.length === 0 ? (
        <CheckoutCard />
      ) : (
        <div className="cart">
          <div className="cartBanner">
            <div className="cartCard">
              <div className="cartCount">
                <p>Cart (2)</p>
              </div>
              {cartItems.map((item) => {
                return (
                  <div className="itemCard">
                    <div key={item.id} className="itemCardLeft">
                      <div className="itemContainer">
                        <img src={item.image} alt={item.image} />
                        <p>{item.title}</p>
                      </div>

                      <span>
                        <DeleteOutlineIcon />
                        <button onClick={() => handleRemoveProduct(item)}>
                          REMOVE
                        </button>
                      </span>
                    </div>

                    <div className="itemCardRight">
                      <h3>
                        {item.quantity} * Ksh{item.price}
                      </h3>
                      <div className="itemCardAdd">
                        <button>
                          <RemoveIcon className="itemIcon" />
                        </button>
                        <span></span>
                        <button>
                          <AddIcon className="itemIcon" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="amountCard">
              <div className="cartSummary">
                <p>CART SUMMARY</p>
              </div>

              <div className="subTotal">
                <p>Subtotal</p>
                <h2>Ksh {subTotal}</h2>
              </div>

              <div className="amountCheckout">
                <button>CHECKOUT (Ksh {subTotal})</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
