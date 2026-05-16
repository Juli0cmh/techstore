export default function CartItem({ item }) {
  // 1. Desestructuración: Extraemos solo lo que necesitamos del 'item'
  const { image, name, quantity, price } = item;

  // 2. Lógica separada del render: Calculamos el subtotal asegurando 2 decimales
  const subtotal = (price * quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img
        src={image}
        alt={`Imagen del producto: ${name}`}
        className="cart-image"
      />

      <div className="cart-item-details">
        <h3>{name}</h3>
        <p>Cantidad: {quantity}</p>
        <p className="cart-item-price">
          ${subtotal}
        </p>
      </div>
    </div>
  );
}