// Importación de librerías y componentes necesarios
import Isotope from "isotope-layout"; // Librería para crear layouts filtrables y dinámicos
import { useEffect, useRef } from "react"; // Hooks de React para manejar estado y efectos
import { dataImage, portfolioHover } from "../utilits"; // Funciones personalizadas para inicializar efectos

// Componente principal Portfolio
const Portfolio = () => {
  // Efecto para inicializar funciones personalizadas al montar el componente
  useEffect(() => {
    dataImage(); // Inicializa efectos relacionados con imágenes
    portfolioHover(); // Inicializa efectos de hover en el portfolio
  }, []); // Se ejecuta solo una vez al montar el componente

  // Configuración de Isotope para el layout de la galería
  const isotope = useRef(); // Referencia para almacenar la instancia de Isotope

  // Efecto para inicializar Isotope después de que el componente se monte
  useEffect(() => {
    // Se usa setTimeout para asegurar que el DOM esté listo
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item", // Selector de los elementos de la galería
        percentPosition: true, // Usa porcentajes para posicionar los elementos
        masonry: {
          columnWidth: ".grid-item", // Ancho de las columnas para el layout masonry
        },
        animationOptions: {
          duration: 750, // Duración de la animación
          easing: "linear", // Tipo de animación
          queue: false, // No encolar animaciones
        },
      });
    }, 500); // Retraso de 500ms para asegurar que el DOM esté listo
  }, []);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <div className="dizme_tm_portfolio">
        <div className="container">
          {/* Galería de elementos */}
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {/* Ejemplo de un elemento de la galería */}
              <li className="web grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Sitio Web 1"
                    data-category="Web"
                  >
                    <img src="img/portfolio/sitio-web-1.png" alt="Sitio Web 1" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/sitio-web-1.png"
                    />
                  </div>
                </div>
              </li>
              <li className="web grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Sitio Web 2"
                    data-category="Web"
                  >
                    <img src="img/portfolio/sitio-web-2.png" alt="Sitio Web 2" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/sitio-web-2.png"
                    />
                  </div>
                </div>
              </li>
              {/* Más elementos de la galería... */}
            </ul>
          </div>
        </div>

        {/* Imágenes decorativas */}
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

// Exportación del componente
export default Portfolio;