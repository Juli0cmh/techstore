export default function Cart({ cart, increaseQty, decreaseQty }) {
  // 1. Calculamos el total y lo formateamos a 2 decimales de inmediato
  const total = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  ).toFixed(2);

  return (
    <div className="container cart-page">
      <h2>Carrito de Compras</h2>

      {/* 2. Mejoramos el estado vacío con un mensaje más amigable */}
      {cart.length === 0 ? (
        <p className="empty-cart-msg">
          Tu carrito está vacío. ¡Anímate a agregar algunos productos!
        </p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => {
            // 3. Desestructuración para tener un código más limpio abajo
            const { product, quantity } = item;
            const { id, name, price } = product;
            
            const subtotal = (price * quantity).toFixed(2);

            return (
              <article key={id} className="card cart-item-card">
                <h3>{name}</h3>
                <p>Precio unitario: ${price.toFixed(2)}</p>

                <div className="qty-controls">
                  <button 
                    type="button" 
                    onClick={() => decreaseQty(id)}
                    aria-label={`Disminuir cantidad de ${name}`}
                  >
                    -
                  </button>
                  
                  <span className="quantity-display">{quantity}</span>
                  
                  <button 
                    type="button" 
                    onClick={() => increaseQty(id)}
                    aria-label={`Aumentar cantidad de ${name}`}
                  >
                    +
                  </button>
                </div>

                <p className="item-subtotal">
                  Subtotal: ${subtotal}
                </p>
              </article>
            );
          })}
        </div>
      )}

      {/* 4. Solo mostramos el Total si hay productos en el carrito */}
      {cart.length > 0 && (
        <div className="cart-total">
          <h2>Total: ${total}</h2>
        </div>
      )}
    </div>
  );
}