import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
      {/* Encabezado blanco de la imagen */}
      <header className="about-header-title">
        <div className="container">
          <h1>Nosotros</h1>
        </div>
      </header>

      {/* Cuadrícula de 4 columnas */}
      <section className="about-footer-grid">
        <div className="container grid-4-cols">
          
          {/* Columna 1: Conócenos */}
          <div className="grid-col">
            <h3>Conócenos</h3>
            <ul>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/shipping">Tiempos de Envío</Link></li>
              <li><Link to="/faq">Preguntas Frecuentes</Link></li>
            </ul>
            <div className="social-icons">
              <span className="icon fb" aria-label="Facebook">f</span>
              <span className="icon ig" aria-label="Instagram">ig</span>
              <span className="icon tk" aria-label="TikTok">tk</span>
            </div>
          </div>

          {/* Columna 2: Información Importante */}
          <div className="grid-col">
            <h3>Información Importante</h3>
            <ul>
              <li><Link to="/returns">Política de Devoluciones</Link></li>
              <li><Link to="/refunds">Política de Reembolso</Link></li>
              <li><Link to="/privacy">Política y Privacidad</Link></li>
              <li><Link to="/terms">Términos y Condiciones</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contáctenos */}
          <div className="grid-col">
            <h3>Contáctenos</h3>
            <ul className="contact-list">
              <li>📞 8234 5351 (Claro)</li>
              <li>📞 8568 3379 (Tigo)</li>
              <li>✉️ soporte@techstore.com.ni</li>
              <li>📍 Chinandega, Nicaragua. De la iglesia principal 2 1/2 C al Este.</li>
            </ul>
          </div>

          {/* Columna 4: Métodos de Pago */}
          <div className="grid-col">
            <h3>Métodos de Pago</h3>
            <div className="payment-badges">
              <span className="badge visa">VISA</span>
              <span className="badge mc">MasterCard</span>
              <span className="badge amex">AMEX</span>
            </div>
            
            <h3 className="cert-title">Certificaciones</h3>
            <div className="cert-badges">
               <span className="badge ssl">SSL Seguro</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}