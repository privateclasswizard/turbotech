import "./assets/css/App.css";
import image1 from "./assets/img/1.jpg";
import Header from "./components/Header/Header.js";
import Carrosel1 from "./components/Carrosel/Carrosel1.js";
import Carrosel2 from "./components/Carrosel/Carrosel2.js";
import Formulario from"./components/Formulario/Formulario.js";
import Footer from "./components/Footer/Footer.js";


function App() {
  return (
    <>
      <Header />
      <section>
      <section className="Section1">
        <div className="container-section1">
          <div className="text-container-section1">
            <h1>Lorem ipsum dolor sit amet, consectetur</h1>
            <br />
            <p>
              This is a simple react application built using create-react-app.
            </p>
            <br />
            <div className="Button-container-section1">
              <p>Button</p>
            </div>
          </div>
          <img className="img-section1" src={image1} alt="" />
        </div>
      </section>
      <section className="Section2">
        <span className="text-container-section2">Serviços</span>
        <Carrosel1 className="Carousel" />
      </section>
      <section className="Section3">
        <div className="container-section3">
          <div className="titulo-section3">
            <h4 className="titulo-container-section3">BIG NUMBERS</h4>
            <h1>Lorem ipsum dolor sit amet, consectetur</h1>
          </div>
          <div className="div-intens-container-section3">
            <div className="item-container">
              <div className="div-iten-container-section3">
                <span className="titulo1-iten-container-section3">130</span>
                <span className="titulo2-iten-container-section3">Mil</span>
              </div>
              <br />
              <span className="text-iten-container-section3">
                Lorem ispansum dolor sit amet
              </span>
            </div>
            <div className="item-container">
              <div className="div-iten-container-section3">
                <span className="titulo3-iten-container-section3">+</span>
                <span className="titulo4-iten-container-section3">150</span>
              </div>
              <br />
              <span className="text-iten-container-section3">
                Lorem ispansum dolor sit amet
              </span>
            </div>
            <div className="item-container">
              <div className="div-iten-container-section3">
                <span className="titulo3-iten-container-section3">+</span>
                <span className="titulo4-iten-container-section3">20</span>
              </div>
              <br />
              <span className="text-iten-container-section3">
                Lorem ispansum dolor sit amet
              </span>
            </div>
          </div>
          <div className="rodapesection3">
            <div className="Button-container-section3">
              <p>Button</p>
            </div>
          </div>
        </div>
      </section>
      <section className="Section4">
        <span className="text1-container-section4">Quem já contratou</span>
        <span className="text2-container-section4"> recomenda</span>
        <Carrosel2/>
      </section>
      <section className="Section5">
      < Formulario />
      </section>
      <section className="Section6">
      <Footer />
      </section>
      </section>
    </>
  );
}

export default App;
