import { useState } from "react";
import "./Helicop.css";

export const Helicop = () => {
  // Estado para controlar si se muestra el iframe
  const [mostrarIframe, setMostrarIframe] = useState(false);

  // Función para mostrar el iframe cuando se hace clic en el botón "Jugar"
  const mostrarIframeHandler = () => {
    setMostrarIframe(!mostrarIframe);
  };
  // Función para cerrar el iframe desde dentro de la modal
  const cerrarModalHandler = () => {
    setMostrarIframe(false);
  };

  return (
    <>
    {/* Modal */}
    {mostrarIframe && (
          <>          
          <div className="header-spacer"></div>
          <div className="modal-dialog modal-fullscreen mt-5">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Helicopter</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={cerrarModalHandler}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Aquí va el iframe */}
                <iframe
                  className="juego"
                  scrolling="no"
                  allowFullScreen="si"
                  frameBorder="0"
                  src="https://html-classic.itch.zone/html/8561483/index.html"
                  style={{ width: 1500 }}
                ></iframe>
              </div>
              {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cerrarModalHandler}>Close</button>
              </div> */}
            </div>
          </div>
          </>
        )}
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center align-items-center">
            
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide mt-5"
              data-bs-ride="carousel"
              style={{ width: "50%" }}
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
            <p className="text-white mt-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              magni nam officiis soluta cum ipsam porro laudantium consectetur,
              repellendus vel esse alias hic quibusdam eos minima incidunt velit
              aut molestiae.{" "}
            </p>
          </div>
          <div className="col-lg-6 mb-5">
            <button className="game-button" onClick={mostrarIframeHandler}>
              {" "}
              Jugar{" "}
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
};
