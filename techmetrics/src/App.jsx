function App() {

  const products = [
    {
      name: "iPhone 15 Pro",
      price: "$1200",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569"
    },
    {
      name: "Samsung Galaxy S24",
      price: "$999",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
    },
    {
      name: "Gaming Headset",
      price: "$150",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90"
    },
    {
      name: "Smart Watch",
      price: "$299",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    }
  ];

  return (
    <div style={{
      fontFamily: "Arial",
      backgroundColor: "#4507ee"
    }}>

      {/* NAVBAR */}
      <nav style={{
        backgroundColor: "#111",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <h2>TechStore</h2>

        <div style={{
          display: "flex",
          gap: "20px"
        }}>
          <span>Inicio</span>
          <span>Productos</span>
          <span>Ofertas</span>
          <span>Contacto</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "80px 20px",
        backgroundColor: "white"
      }}>

        <h1 style={{
          fontSize: "55px"
        }}>
          Tecnología de Última Generación
        </h1>

        <p style={{
          fontSize: "20px",
          color: "gray"
        }}>
          Encuentra smartphones, laptops y accesorios premium.
        </p>

        <button style={{
          padding: "15px 30px",
          backgroundColor: "#111",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          marginTop: "20px"
        }}>
          Comprar Ahora
        </button>

      </section>

      {/* PRODUCTOS */}
      <section style={{
        padding: "50px"
      }}>

        <h2 style={{
          textAlign: "center",
          marginBottom: "40px"
        }}>
          Productos Destacados
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}>

          {products.map((product, index) => (

            <div
              key={index}
              style={{
                backgroundColor: "white",
                width: "250px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
              }}
            >

              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div style={{
                padding: "20px"
              }}>
                <h3>{product.name}</h3>

                <p style={{
                  color: "gray"
                }}>
                  {product.price}
                </p>

                <button style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#111",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}>
                  Agregar al carrito
                </button>
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: "#111",
        color: "white",
        textAlign: "center",
        padding: "20px"
      }}>
        © 2026 TechStore - Todos los derechos reservados
      </footer>

    </div>
  );
}

export default App;