import "./Robot.css";
import { useState } from "react";

export const Robot = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const abrirIframe = () => {
    setModalOpen(true);
  };
  const cerrarIframe = () => {
    setModalOpen(false);
  };
  return (
    <>
      {isModalOpen && (
        <>
          <div className="modal-dialog modal-fullscreen-lg-down" style={{ zIndex: 2000 }}>
            <div className="modal-content d-flex">
              <div className="modal-header mx-auto">
                <button 
                  type="button"
                  className="btn-close ms-2"
                  onClick={cerrarIframe}
                  aria-label="Close"
                ></button>
                <div className="modal-body">
                  <iframe
                    className="juego"
                    allowFullScreen={true}
                    scrolling="no"
                    frameBorder="0"
                    src="https://html-classic.itch.zone/html/8561483/index.html"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {!isModalOpen && (
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-lg-6 d-flex justify-content-center">
              <div
                id="carouselExampleAutoplaying"
                className="carousel slide mt-5"
                data-bs-ride="carousel"
                style={{ width: "100%" }}
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS0.png"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS1.png"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS2.png"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS3.png"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS4.png"
                      className="d-block w-100"
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"  
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="contenedor">
                <div class="card4">
                  <div class="content">
                    <p class="logo">
                      <strong>Descripcion de Juego</strong>
                    </p>
                    <div class="hover_content">
                      <p>
                        En "RoboMundo: La Batalla Cibernética"
                        <br />, te embarcarás en una emocionante aventura en un
                        mundo futurista poblado por robots de todas las formas y
                        tamaños. El juego te sitúa en el papel de un intrépido
                        piloto de robot que debe enfrentarse a desafiantes
                        misiones y batallas épicas para salvar el universo de
                        una amenaza desconocida. <br />
                        Características del Juego: Personalización de Robots:
                        Antes de comenzar tu misión, tendrás la oportunidad de
                        personalizar tu propio robot con una amplia gama de
                        piezas, armas y mejoras. Desde robustos tanques de
                        batalla hasta ágiles drones voladores, las posibilidades
                        son infinitas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <button className="game-button4" onClick={abrirIframe}>
                <span>Jugar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Robot;
