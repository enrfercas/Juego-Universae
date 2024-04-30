import './Helicop.css';

export const Helicop = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide mt-5"
              data-bs-ride="carousel"
              style={{ width: "50%"}}
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/public/Games-Images/InterfazGame/Miniaturas/Helicoptero/Helicoptero0.png" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                <img src="/public/Games-Images/InterfazGame/Miniaturas/Helicoptero/Helicoptero1.png" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                <img src="/public/Games-Images/InterfazGame/Miniaturas/Helicoptero/Helicoptero2.png" className="d-block w-100" />
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
            <p className='text-white mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni nam officiis soluta cum ipsam porro laudantium consectetur, repellendus vel esse alias hic quibusdam eos minima incidunt velit aut molestiae. </p>
          </div>
          <div className="col-lg-6 mb-5">
            <button className="game-button"> Jugar </button>
          </div>
        </div>
        
      </div>
    </>
  );
};
