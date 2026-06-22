/**
 * Catálogo de productos (Base de datos simulada)
 * Esta lista alimenta el estado global y a los componentes como ProductCard.
 */
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    image: "/iphone-15-pro.png",
    description: "Potencia extrema con chip A17 Pro y cámara profesional.",
    category: "smartphones",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 1199,
    image: "/Samsung_s24_ultra.png",
    description: "El Android más potente con S Pen integrado.",
    category: "smartphones",
  },
  {
    id: 3,
    name: "MacBook Air M3",
    price: 1299,
    image: "/MacBook_Air_M3.png",
    description: "Ligera, rápida y eficiente con chip M3.",
    category: "laptops",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 1099,
    image: "/Dell_XPS_13.png",
    description: "Laptop premium para trabajo y estudio.",
    category: "laptops",
  },
  {
    id: 5,
    name: "AirPods Pro 2",
    price: 249,
    image: "/AirPods_Pro_2.png",
    description: "Cancelación de ruido activa y audio espacial.",
    category: "accessories",
  },
  {
    id: 6,
    name: "Samsung Galaxy Buds 2 Pro",
    price: 199,
    image: "/Samsung_Galaxy_Buds_2_Pro.png",
    description: "Sonido Hi-Fi inalámbrico con ANC.",
    category: "accessories",
  }
];

export default products;