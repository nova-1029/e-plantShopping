import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <section className="empty-cart">
          <div className="empty-icon">🛒</div>

          <h1>Your Cart is Empty</h1>

          <p>
            Looks like you haven't added any plants yet.
          </p>

          <Link to="/plants">
            <button className="continue-button">
              Continue Shopping
            </button>
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <section className="cart-header">
        <p className="section-label">
          YOUR SELECTION
        </p>

        <h1>Shopping Cart</h1>

        <p>
          {totalItems} item
          {totalItems !== 1 ? "s" : ""} in your cart
        </p>
      </section>

      <section className="cart-layout">
        <div className="cart-items">
          {cartItems.map(item => {
            const itemTotal =
              item.price * item.quantity;

            return (
              <article
                key={item.id}
                className="cart-item"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-item-info">
                  <span className="category">
                    {item.category}
                  </span>

                  <h2>{item.name}</h2>

                  <p>
                    Unit Price: ₹{item.price}
                  </p>

                  <strong>
                    ₹{itemTotal}
                  </strong>
                </div>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      dispatch(
                        decreaseQuantity(item.id)
                      )
                    }
                    disabled={item.quantity === 1}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(
                        increaseQuantity(item.id)
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="delete-button"
                  onClick={() =>
                    dispatch(
                      removeFromCart(item.id)
                    )
                  }
                >
                  Delete
                </button>
              </article>
            );
          })}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{totalAmount}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{totalAmount}</strong>
          </div>

          <button
            className="checkout-button"
            onClick={() =>
              alert("Checkout Coming Soon!")
            }
          >
            Checkout
          </button>

          <Link
            to="/plants"
            className="continue-link"
          >
            Continue Shopping
          </Link>
        </aside>
      </section>
    </main>
  );
}

export default CartItem;