import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Rcp.css';

export const Rcp = () => {
  const [modalImageSrc, setModalImageSrc] = useState('');
  const modalRef = useRef(null);

  const handleImageClick = (src) => {
    setModalImageSrc(src);
  };

  const handleClickOutsideImage = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalImageSrc('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideImage);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideImage);
    };
  }, []);

  return (
    <>
      <div className="contenedor-principal">
        <h1 className="titulo-juego">PROTOCOLO ANTE UNA HEMORRAGIA INTERNA</h1>
        <div className="contenedor-juego">
          <div className="juego-descripcion">
            <p>Bienvenido al juego de hemorragias internas. Deberás familiarizarte con los controles y hacer esto</p>
            <h2>Controles e instrucciones</h2>
            <p>
              Puede comenzar la partida dando a <span>comenzar</span>, si lo prefiere puede hacer agrandar el juego haciendo <span>doble click</span> en el juego. Los controles seran <span>W</span> para avanzar <span>A</span> y <span>D</span> para desplazamiento lateral y <span>S</span> para ir hacia atrás. Los movimientos de cabeza se harán con el <span>Mouse</span>, y puede interactuar con los objetos de su entorno con la tecla <span>F</span>.
              Buena suerte con su partida.
            </p>
          </div>
          <div className="div-juego">
            <iframe className="juego" scrolling="no" allowFullScreen="" frameBorder="0" src="https://html-classic.itch.zone/html/8561483/index.html"></iframe>
          </div>
          <div className="galeria-juego">
            <h3>Galería</h3>
            <img className='imagen-juego' onClick={() => handleImageClick("public/Games-Images/InterfazGame/Miniaturas/Hemorragia/Hemorragia0.png")} src="public/Games-Images/InterfazGame/Miniaturas/Hemorragia/Hemorragia0.png" alt="imagen de juego" />
            <img className='imagen-juego' onClick={() => handleImageClick("public/Games-Images/InterfazGame/Miniaturas/Hemorragia/Hemorragia1.png")} src="public/Games-Images/InterfazGame/Miniaturas/Hemorragia/Hemorragia1.png" alt="imagen de juego" />
            <img className='imagen-juego' onClick={() => handleImageClick("public/Games-Images/InterfazGame/Miniaturas/Hemorragia/Hemorragia2.png")} src="public/Games-Images/InterfazGame/Miniaturas/Hemorragia/Hemorragia2.png" alt="imagen de juego" />
            <img className='imagen-juego' onClick={() => handleImageClick("public/Games-Images/InterfazGame/Miniaturas/Hemorragia/Hemorragia3.png")} src="public/Games-Images/InterfazGame/Miniaturas/Hemorragia/Hemorragia3.png" alt="imagen de juego" />
            <img className='imagen-juego' onClick={() => handleImageClick("public/Games-Images/InterfazGame/Miniaturas/Hemorragia/Hemorragia4.png")} src="public/Games-Images/InterfazGame/Miniaturas/Hemorragia/Hemorragia4.png" alt="imagen de juego" />
          </div>
        </div>
      </div>
      <div className={`modal ${modalImageSrc ? '' : 'modal-off'}`}>
        
        <div ref={modalRef} className='modal-content'>
          <img className='imagen-modal' src={modalImageSrc} alt="imagen-modal" />
        </div>
        
      </div>
    </>
  );
};

export default Rcp;


