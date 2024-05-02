import { useState } from "react";
import "./Helicop.css";

export const Helicop = () => {
  const [mostrarIframe, setMostrarIframe] = useState(false);

  const mostrarIframeHandler = () => {
    console.log("Cambiando el estado de mostrarIframe");
    setMostrarIframe(true);
  };

  const cerrarModalHandler = () => {
    setMostrarIframe(false);
  };

  return (
    <>
      <div className="header-spacer"></div>
      {mostrarIframe && (
        <>
          <div className="header-spacer"></div>
          <div
            className="modal-dialog modal-fullscreen-lg-down"
            style={{ zIndex: 2000 }}
          >
            <div className="modal-content d-flex w-100">
              <div className="modal-header mx-auto">
                <h5 className="modal-title">Helicopter</h5>
                <button
                  type="button"
                  className="btn-close ms-3"
                  onClick={cerrarModalHandler}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <iframe
                  className="juego"
                  scrolling="no"
                  allowFullScreen={true}
                  frameBorder="0"
                  src="https://html-classic.itch.zone/html/8561483/index.html"
                ></iframe>
              </div>
            </div>
          </div>
        </>
      )}
      {!mostrarIframe && (
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div
                id="carouselExampleAutoplaying"
                className="carousel slide mt-5"
                data-bs-ride="carousel"
                style={{ width: "50%", zIndex: 1 }}
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/public/Games-Images/InterfazGame/Miniaturas/Helicoptero/Helicoptero0.png"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/public/Games-Images/InterfazGame/Miniaturas/Helicoptero/Helicoptero1.png"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/public/Games-Images/InterfazGame/Miniaturas/Helicoptero/Helicoptero2.png"
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
          </div>
          <div className="row mb-5">
            <div className="col-lg-6">
              <span className="description">
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                magni nam officiis soluta cum ipsam porro laudantium
                consectetur, repellendus vel esse alias hic quibusdam eos minima
                incidunt velit aut molestiae.
              </span>
            </div>
            <div className="col-lg-6 mb-5">
              <button className="game-button" onClick={mostrarIframeHandler}>
                {" "}
                Jugar{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
