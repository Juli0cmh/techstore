export default function Footer() {
  // Calculamos el año dinámicamente para que se actualice solo
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <h3>TechStore</h3>
      
      <p>Tecnología de última generación para todos.</p>
      
      <p>
        &copy; {currentYear} Todos los derechos reservados.
      </p>
    </footer>
  );
}