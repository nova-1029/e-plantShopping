import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const isInCart = cartItems.some(
    item => item.id === product.id
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <span className="category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>₹{product.price}</strong>

          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className="add-button"
          >
            {isInCart
              ? "Added to Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;