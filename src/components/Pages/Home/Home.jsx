import { Link } from 'react-router-dom';
import './Home.css';
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div className="container-fluid body-content">
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">           
            
            <div className="card">
              <img
                src="../../../public/Games-Images/InterfazHome/Miniaturas_simuladores/HomeButton0.png"
                style={{ width: "96%" }}
              />
              <div className="card__content">
                <p className="card__title">Card Title</p>
                <p className="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <Link to='/Helicop'><button className="game-button">
                  <span>Jugar</span>
                </button></Link>
              </div>
            </div>
            
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">

            <div className="card">
              <img
                src="../../../public/Games-Images/InterfazHome/Miniaturas_simuladores/HomeButton1.png"
                style={{ width: "96%" }}
              />
              <Link to='/Rcp'>
                <div className="card__content">
                  <p className="card__title text-center">PROTOCOLO ANTE UNA HEMORRAGIA INTERNA</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </p>
                  
                  <button className="game-button">
                      <span>Jugar</span>
                  </button>
                  
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../public/Games-Images/InterfazHome/Miniaturas_simuladores/HomeButton2.png"
                style={{ width: "96%" }}
              />
              <div className="card__content">
                <p className="card__title">Card Title</p>
                <p className="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <button className="game-button">
                  <span>Jugar</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../public/Games-Images/InterfazHome/Miniaturas_simuladores/HomeButton3.png"
                style={{ width: "96%" }}
              />
              <div className="card__content">
                <p className="card__title">Card Title</p>
                <p className="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <Link to ='/Robot'>
                <button className="game-button">
                  <span>Jugar</span>
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../public/Games-Images/InterfazHome/Miniaturas_simuladores/HomeButton4.png"
                style={{ width: "96%" }}
              />
              <div className="card__content">
                <p className="card__title">Card Title</p>
                <p className="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <button className="game-button">
                  <span>Jugar</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../public/Games-Images/InterfazHome/Miniaturas_simuladores/HomeButton5.png"
                style={{ width: "96%" }}
              />
              <div className="card__content">
                <p className="card__title">Rescate En Ascensor</p>
                <p className="card__description">
                  Dreamtime Combat es un juego de acción y plataformas basado en
                  la mitología aborigen australiana, en el que juegas como un
                  águila azul hostil
                </p>
                <Link to="/Bomberos" className="navbar-brand logo-universae">
                  <button className="game-button">
                    <span>Jugar</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
