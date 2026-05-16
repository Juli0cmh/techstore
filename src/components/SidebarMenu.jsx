import { Link } from "react-router-dom";

export default function SidebarMenu({ isOpen, toggleMenu }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      
      <button 
        type="button" 
        className="close-btn" 
        onClick={toggleMenu}
        aria-label="Cerrar menú"
      >
        ✖
      </button>

      <nav className="sidebar-links">
        <Link to="/" onClick={toggleMenu}>
          HOME
        </Link>
        
        <Link to="/cart" onClick={toggleMenu}>
          CARRITO
        </Link>
        
        <Link to="/about" onClick={toggleMenu}>
          NOSOTROS
        </Link>
      </nav>

    </aside>
  );
}