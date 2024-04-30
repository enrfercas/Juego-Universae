import "./Bomberos.css";
import { useEffect } from "react";

export const Bomberos = () => {
  useEffect(() => {
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselImages = document.querySelectorAll(".carousel-slide img");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let counter = 0;
    const size = carouselImages[0].clientWidth;

    carouselSlide.style.transform = "translateX(0)";

    nextBtn.addEventListener("click", () => {
      if (counter >= carouselImages.length - 1) return;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      carouselImages.forEach((img) => img.classList.remove("active"));
      carouselImages[counter].classList.add("active");
    });

    prevBtn.addEventListener("click", () => {
      if (counter <= 0) return;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter--;
      carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      carouselImages.forEach((img) => img.classList.remove("active"));
      carouselImages[counter].classList.add("active");
    });

    carouselSlide.addEventListener("transitionend", () => {
      if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 1;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        carouselImages.forEach((img) => img.classList.remove("active"));
        carouselImages[counter].classList.add("active");
      }
      if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        carouselImages.forEach((img) => img.classList.remove("active"));
        carouselImages[counter].classList.add("active");
      }
    });
  }, []);

  return (
    <>
      <div className="contenedor-principal">
        <div className="espacio-header"></div>
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="/public/Games-Images/InterfazGame/Miniaturas/Extincion/Extincion0.png"
              alt="Imagen 1"
            />
            <img
              src="/public/Games-Images/InterfazGame/Miniaturas/Extincion/Extincion1.png"
              alt="Imagen 2"
            />
            <img
              src="/public/Games-Images/InterfazGame/Miniaturas/Extincion/Extincion2.png"
              alt="Imagen 3"
            />
            <img
              src="/public/Games-Images/InterfazGame/Miniaturas/Extincion/Extincion3.png"
              alt="Imagen 4"
            />
            <img
              src="/public/Games-Images/InterfazGame/Miniaturas/Extincion/Extincion4.png"
              alt="Imagen 5"
            />
          </div>
          <button className="prev-btn"> {"<"} </button>
          <button className="next-btn"> {">"}</button>
        </div>

        <div className="book">
          <div className="book-text">
            <p>
              Dreamtime Combat es un juego de acción y plataformas basado en la
              mitología aborigen australiana, en el que juegas como un águila
              azul hostil. Pon fin a la era del Tiempo de los Sueños mediante el
              asesinato violento de los dioses australianos. Destruye los tótems
              para expulsar el poder divino del mundo mundano y mata al héroe
              cultural Baiame y al todopoderoso dios de la lluvia, la Serpiente
              del Arco Iris.
            </p>
           
          </div>
          <div className="cover">
            <img src="/public/logo_azul.png" alt="logo universae" />
            <h1>Intrucciones</h1>
          </div>
        </div>

        <div className="contenedor-container">
          <iframe
            className="juego"
            scrolling="no"
            allowfullscreen=""
            frameborder="0"
            src="https://html-classic.itch.zone/html/8561483/index.html"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Bomberos;
