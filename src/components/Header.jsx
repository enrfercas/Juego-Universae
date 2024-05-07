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
              <a className="nav-link" aria-current="page" href="#" style={{ color: "#fff" }}>
                Home
              </a>
              <a className="nav-link" href="#" style={{ color: "#fff" }}>
                Features
              </a>
              <a className="nav-link" href="#" style={{ color: "#fff" }}>
                Pricing
              </a>
              <a className="nav-link disabled" aria-disabled="true" style={{ color: "#fff" }}>
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
