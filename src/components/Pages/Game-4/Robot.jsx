import "./Robot.css";
import { useState, useRef, useEffect } from "react";

export const Robot = () => {
  const [modalImageSrc, setModalImageSrc] = useState("");
  const modalRef = useRef(null);
  const iframeRef = useRef(null);

  const handleImageClick = (src) => {
    setModalImageSrc(src);
    document.body.style.overflow = "hidden";
  };

  const handleClickOutsideImage = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalImageSrc("");
      document.body.style.overflow = "auto";
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

  useEffect(() => {
    const handleOrientationChange = () => {
      if (iframeRef.current && mostrarIframe) {
        iframeRef.current.style.width = "100%";
        console.log("handle orientation: ", iframeRef);
        location.reload();
      }
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, [mostrarIframe]);

  return (
    <>
      <div className="header-spacer"></div>
      {mostrarIframe && (
        <>
          <div className="container-fluid d-flex justify-content-center">
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
          </div>
        </>
      )}
      {!mostrarIframe && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="titulo-juego">PROTOCOLO SOBRE EL USO DE EPIS</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 d-flex justify-content-center">
              <div className="juego-descripcion">
                <h2>Bienvenido al juego EPIS Defenders</h2>
                <p>Es un juego de acción y estrategia</p>
                <p>
                  Donde los jugadores se convierten en defensores de la
                  seguridad en entornos peligrosos. Controlando a un equipo de
                  trabajadores, deben equiparlos con el{" "}
                  <span>equipo de protección individual</span> adecuado para
                  cada tarea. A medida que enfrentan desafíos como{" "}
                  <span>derrames químicos</span> o{" "}
                  <span>accidentes eléctricos</span>, los jugadores deben tomar
                  decisiones rápidas para proteger a su equipo y completar las
                  misiones con éxito.{" "}
                  <span>¿Puedes mantener a tu equipo a salvo?</span>
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
                      "public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS0.png"
                    )
                  }
                  src="public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS0.png"
                  alt="imagen de juego"
                />
                <img
                  className="imagen-juego"
                  onClick={() =>
                    handleImageClick(
                      "public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS1.png"
                    )
                  }
                  src="public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS1.png"
                  alt="imagen de juego"
                />
                <img
                  className="imagen-juego"
                  onClick={() =>
                    handleImageClick(
                      "public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS2.png"
                    )
                  }
                  src="public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS2.png"
                  alt="imagen de juego"
                />
                <img
                  className="imagen-juego"
                  onClick={() =>
                    handleImageClick(
                      "public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS3.png"
                    )
                  }
                  src="public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS3.png"
                  alt="imagen de juego"
                />
                <img
                  className="imagen-juego"
                  onClick={() =>
                    handleImageClick(
                      "public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS4.png"
                    )
                  }
                  src="public/Games-Images/InterfazGame/Miniaturas/EPIS/EPIS4.png"
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
export default Robot;
