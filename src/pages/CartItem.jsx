import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert(
      "Checkout functionality is coming soon!"
    );
  };

  if (cartItems.length === 0) {
    return (
      <main className="cart-page empty-cart">
        <h1>Your Shopping Cart</h1>

        <p>
          Your cart is currently empty.
        </p>

        <Link
          to="/plants"
          className="continue-shopping"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Your Shopping Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => {
            const itemTotal =
              item.price * item.quantity;

            return (
              <div
                className="cart-item"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h2>{item.name}</h2>

                  <p>
                    Unit Price: ₹{item.price}
                  </p>

                  <p>
                    Total: ₹{itemTotal}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        handleDecrease(item)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        handleIncrease(item)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-button"
                    onClick={() =>
                      handleDelete(item.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="cart-summary">
          <h2>Cart Summary</h2>

          <p className="cart-total">
            Total Amount: ₹{calculateTotal()}
          </p>

          <button
            className="checkout-button"
            onClick={handleCheckout}
          >
            Checkout
          </button>

          <Link
            to="/plants"
            className="continue-shopping"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default CartItem;
