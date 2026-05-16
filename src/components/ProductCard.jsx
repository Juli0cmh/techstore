export default function ProductCard({
  product,
  cart,
  addToCart,
  increaseQty,
  decreaseQty,
}) {
  // 1. Desestructuración: Sacamos los datos del producto para no repetir "product."
  const { id, name, description, price, image } = product;

  // 2. Lógica de estado: Buscamos si ya existe en el carrito
  const inCart = cart.find((item) => item.id === id);

  // 3. Formato de precio
  const formattedPrice = price.toFixed(2);

  return (
    <div className="card">
      <img 
        src={image} 
        alt={`Imagen de ${name}`} 
        className="product-image" 
      />
      
      <div className="product-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="product-price">${formattedPrice}</p>
      </div>

      {!inCart ? (
        <button 
          type="button" 
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Agregar al carrito
        </button>
      ) : (
        <div className="quantity-controls">
          <button 
            type="button" 
            onClick={() => decreaseQty(id)}
            aria-label="Disminuir cantidad"
          >
            -
          </button>
          
          <span className="quantity-display">{inCart.qty}</span>
          
          <button 
            type="button" 
            onClick={() => increaseQty(id)}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}