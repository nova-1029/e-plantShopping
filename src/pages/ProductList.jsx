import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import products from "../data/product";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const categories = [
    ...new Set(products.map((product) => product.category))
  ];

  const isInCart = (productId) => {
    return cartItems.some(
      (item) => item.id === productId
    );
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <main className="product-list-page">
      <div className="product-list-header">
        <h1>Paradise Nursery Plants</h1>

        <p>
          Explore our collection of beautiful plants for your home
          and workspace.
        </p>
      </div>

      {categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category === category
        );

        return (
          <section
            className="category-section"
            key={category}
          >
            <h2>{category}</h2>

            <div className="product-grid">
              {categoryProducts.map((product) => {
                const added = isInCart(product.id);

                return (
                  <div
                    className="product-card"
                    key={product.id}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                    <div className="product-info">
                      <h3>{product.name}</h3>

                      <p className="product-price">
                        ₹{product.price}
                      </p>

                      <button
                        onClick={() =>
                          handleAddToCart(product)
                        }
                        disabled={added}
                        className="add-to-cart-button"
                      >
                        {added
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default ProductList;
