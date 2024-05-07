import './Bomberos.css'
import { useState, useRef, useEffect } from "react";

export const Bomberos = () => {
  const [modalImageSrc, setModalImageSrc] = useState("");
  const modalRef = useRef(null);

  const handleImageClick = (src) => {
    setModalImageSrc(src);
    document.body.style.overflow = "hidden"; // Ocultar el scroll
  };

  const handleClickOutsideImage = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalImageSrc("");
      document.body.style.overflow = "auto"; // Restaurar el scroll
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideImage);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideImage);
    };
  }, []);

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
          <div
            className="modal-dialog modal-fullscreen-lg-centered"
            style={{ zIndex: 2000, width: "80%" }}
          >
            <div className="modal-content d-flex w-100">
              <div className="fondo-iframe">
                <div className="boton">
                  <button
                    type="button"
                    className="btn-close"
                    onClick={cerrarModalHandler}
                    data-bs-theme="light"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body d-flex justify-content-center w-90">
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
      {!mostrarIframe && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="titulo-juego">RESCATE EN ASCENSOR</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 d-flex justify-content-center">
              <div className="juego-descripcion">
                <p>
                  Bienvenido al juego de Rescate en Ascensor. Deberás
                  familiarizarte con los controles y hacer esto
                </p>
                <h2>Controles e instrucciones</h2>
                <p>
                  Puede comenzar la partida dando a <span>comenzar</span>, si lo
                  prefiere puede hacer agrandar el juego haciendo{" "}
                  <span>doble click</span> en el juego. Los controles seran{" "}
                  <span>W</span> para avanzar <span>A</span> y <span>D</span>{" "}
                  para desplazamiento lateral y <span>S</span> para ir hacia
                  atrás. Los movimientos de cabeza se harán con el{" "}
                  <span>Mouse</span>, y puede interactuar con los objetos de su
                  entorno con la tecla <span>F</span>. Buena suerte con su
                  partida.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container d-flex justify-content-center">
                <img
                  className="imagen-boton"
                  src="/public/iframe-imagen.png"
                  style={{ width: "90%", margin: "auto" }}
                  onClick={mostrarIframeHandler}
                />
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center">
              <div className="galeria-juego">
                <h3>Galería</h3>
                <img
                  className="imagen-juego"
                  onClick={() =>
                    handleImageClick(
                      "public/Games-Images/InterfazGame/Miniaturas/Ascensor/Ascensor0.png"
                    )
                  }
                  src="public/Games-Images/InterfazGame/Miniaturas/Ascensor/Ascensor0.png"
                  alt="imagen de juego"
                />
                <img
                  className="imagen-juego"
                  onClick={() =>
                    handleImageClick(
                      "public/Games-Images/InterfazGame/Miniaturas/Ascensor/Ascensor1.png"
                    )
                  }
                  src="public/Games-Images/InterfazGame/Miniaturas/Ascensor/Ascensor1.png"
                  alt="imagen de juego"
                />
                <img
                  className="imagen-juego"
                  onClick={() =>
                    handleImageClick(
                      "public/Games-Images/InterfazGame/Miniaturas/Ascensor/Ascensor2.png"
                    )
                  }
                  src="public/Games-Images/InterfazGame/Miniaturas/Ascensor/Ascensor2.png"
                  alt="imagen de juego"
                />
                <img
                  className="imagen-juego"
                  onClick={() =>
                    handleImageClick(
                      "public/Games-Images/InterfazGame/Miniaturas/Ascensor/Ascensor3.png"
                    )
                  }
                  src="public/Games-Images/InterfazGame/Miniaturas/Ascensor/Ascensor3.png"
                  alt="imagen de juego"
                />
                <img
                  className="imagen-juego"
                  onClick={() =>
                    handleImageClick(
                      "public/Games-Images/InterfazGame/Miniaturas/Ascensor/Ascensor4.png"
                    )
                  }
                  src="public/Games-Images/InterfazGame/Miniaturas/Ascensor/Ascensor4.png"
                  alt="imagen de juego"
                />
              </div>
            </div>
            <div className={`modal ${modalImageSrc ? "" : "modal-off"}`}>
              <div ref={modalRef} className="modal-content">
                <img
                  className="imagen-modal"
                  src={modalImageSrc}
                  alt="imagen-modal"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Bomberos;
