import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top gradient-header">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand logo-universae" > <img src='/public/logo-blanco.png' style={{ width: '60px', height: 'auto', cursor: 'pointer' }} /> </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
             
              <Link to='/Helicop'className="nav-link" href="#" style={{ color: "#fff" }}>
                Helicoptero
              </Link>
              <Link to='/Rcp' className="nav-link" href="#" style={{ color: "#fff" }}>
                Reanimación
              </Link>
              <Link to='/Fire' className="nav-link" aria-disabled="true" style={{ color: "#fff" }}>
                Incendios
              </Link>
              <Link to='/Bomberos' className="nav-link " aria-disabled="true" style={{ color: "#fff" }}>
                Bomberos
              </Link>
              <Link to='/Grua' className="nav-link" aria-disabled="true" style={{ color: "#fff" }}>
                Grúa
              </Link>
              <Link to='/Robot' className="nav-link" aria-disabled="true" style={{ color: "#fff" }}>
                Robot
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
