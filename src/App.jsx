import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Navbar from "./components/Navbar";
import SidebarMenu from "./components/SidebarMenu";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";

export default function App() {
  // Estado global de la aplicación
  const [cart, setCart] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funciones del menú
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Funciones del carrito
  const addToCart = (product) => {
    setCart([...cart, { product, quantity: 1 }]);
  };

  const increaseQty = (id) => {
    setCart(cart.map(item => 
      item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item => 
      item.product.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0)); // Si llega a 0, se elimina
  };

  // Calculamos cuántos artículos hay en total para la burbuja roja
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      {/* 1. El Navbar siempre está visible arriba */}
      <Navbar toggleMenu={toggleMenu} cartCount={cartCount} />
      
      {/* 2. El Menú lateral oculto que se abre al hacer clic */}
      <SidebarMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* 3. Las Rutas: Aquí es donde React cambia las páginas */}
      <div className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                cart={cart} 
                addToCart={addToCart} 
                increaseQty={increaseQty} 
                decreaseQty={decreaseQty} 
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart} 
                increaseQty={increaseQty} 
                decreaseQty={decreaseQty} 
              />
            } 
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* 4. El Footer siempre visible abajo */}
      <Footer />
    </Router>
  );
}