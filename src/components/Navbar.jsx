import { Link } from "react-router-dom";

export default function Navbar({ toggleMenu, cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button 
          type="button" 
          className="menu-btn" 
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
        >
          ☰
        </button>
        <h2 className="logo">TechStore</h2>
      </div>

      <div className="navbar-right">
        <Link to="/cart" className="cart-icon" aria-label="Ver carrito de compras">
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}