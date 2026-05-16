import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home({
  cart,
  addToCart,
  increaseQty,
  decreaseQty,
}) {
  return (
    <main className="container home-page">
      <header className="page-header">
        <h1>TechStore</h1>
        <p className="subtitle">Descubre la mejor tecnología al mejor precio</p>
      </header>

      <section className="products-grid" aria-label="Catálogo de productos">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            addToCart={addToCart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        ))}
      </section>
    </main>
  );
}