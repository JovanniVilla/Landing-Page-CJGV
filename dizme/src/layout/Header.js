const Header = ({ logo }) => {
  return (
    <div className="dizme_tm_header">
      <div className="container">
        <div className="inner">
          <div className="logo">
            <a href="#">
              {logo && (
                <img src={logo ? logo : "img/logo/logo.png"} alt="image logo" />
              )}
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Inicio</a>
              </li>
              <li>
                <a href="#about">Acerca de mi</a>
              </li>
              <li>
                <a href="#portfolio">Portafolio</a>
              </li>
              <li>
                <a href="#service">Servicios</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
              <li className="download_cv">
                <a href="img/cv/1.jpg" download="">
                  <span>Descargar CV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
