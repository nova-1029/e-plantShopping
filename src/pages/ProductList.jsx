import products from "../data/product";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const categories = [
    "Indoor Plants",
    "Medicinal Plants",
    "Air Purifying Plants"
  ];

  return (
    <main className="products-page">
      <section className="products-header">
        <p className="section-label">
          EXPLORE OUR COLLECTION
        </p>

        <h1>Plants for Every Space</h1>

        <p>
          Discover beautiful plants selected to make
          your home greener and healthier.
        </p>
      </section>

      {categories.map(category => {
        const categoryProducts = products.filter(
          product => product.category === category
        );

        return (
          <section
            key={category}
            className="category-section"
          >
            <div className="category-heading">
              <h2>{category}</h2>

              <span>
                {categoryProducts.length} plants
              </span>
            </div>

            <div className="product-grid">
              {categoryProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default ProductList;