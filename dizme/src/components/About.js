import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={26} />
                    </h3>
                    <span className="name">
                      Meses de 
                      <br />
                      Exito
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      +<Counter end={10} />
                    </h3>
                    <span className="name">
                      Proyectos
                      <br />
                      Exitosos
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`Soy un Web-Dev`}</span>
                <h3>Puedo desarrollar cualquier proyecto que puedas imaginar</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`¡Hola! Soy desarrollador y diseñador web, soy muy apasionado y
                  me encanta mi trabajo. Con 2 años de experiencia como
                  desarrollador web profesional, he adquirido las habilidades y
                  Conocimientos necesarios para que su proyecto sea un éxito. disfruto
                  cada paso del proceso de diseño, y desarrollo desde la discusión inicial 
                  pasando por la colaboracion hasta la entrega final.`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Contactame
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
