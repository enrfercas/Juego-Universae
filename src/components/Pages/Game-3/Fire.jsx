
import "./Fire.css";
import { useState } from "react";
export const Fire = () => {
  const [isModalOpen, setIsModalOpen]  = useState(false);
  const abrirIframe = () => {
    setIsModalOpen(true);
    console.log ("Estoy seteando la modal: ",isModalOpen);
  };
  const cerrarIframe = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="header-spacer"></div>
      {isModalOpen && (
        <>
          <div className="header-spacer"></div>
          <div
            className="modal-dialog modal-fullscreen-lg-down"
            style={{ zIndex: 2000 }}
          >
            <div className="modal-content d-flex w-100">
              <div className="card text-bg-light p-1">
                <div className="modal-header mx-auto">
                  <h5 className="modal-title mb-2">Fire</h5>
                  <button className="button-game"
                    type="button"
                    onClick={cerrarIframe}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body w-100">
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
          </div>
        </>
      )}
      {!isModalOpen && (
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-lg-12 d-flex justify-content-left align-items-left col-md-6 col-sm-6">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide mt-5"
              data-bs-ride="carousel"
              style={{ width: "50%", zIndex: 1 }}
            >
              <div className="carousel-inner col-lg-6">
                <div className="carousel-item active">
                  <img
                    src="public/Games-Images/InterfazGame/Miniaturas/Extincion/Extincion0.png"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="public/Games-Images/InterfazGame/Miniaturas/Extincion/Extincion1.png"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/public/Games-Images/InterfazGame/Miniaturas/Extincion/Extincion2.png"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/public/Games-Images/InterfazGame/Miniaturas/Extincion/Extincion3.png"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/public/Games-Images/InterfazGame/Miniaturas/Extincion/Extincion4.png"
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
            
            <div className="card-3 ">
              <div className="card__content-game3">
                <div className="card__date-game3"> GAME DESCRIPTION</div>
                <div className="card__info-game3">
                  <h3>
                    Maniobra de extinción según instalación<br></br>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="col-lg-6 mb-5">
                  <button className="button-game" onClick={abrirIframe}>
                    COMENZAR
                    <div id="clip">
                      <div id="leftTop" className="corner"></div>
                      <div id="rightBottom" className="corner"></div>
                      <div id="rightTop" className="corner"></div>
                      <div id="leftBottom" className="corner"></div>
                    </div>
                    <span id="rightArrow" className="arrow"></span>
                    <span id="leftArrow" className="arrow"></span>
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )} 
  </>
  );
};
