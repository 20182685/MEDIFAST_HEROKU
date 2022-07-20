import logo from "../../img/logo/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalInicio from "../modal/ModalInicio.js";

const NavBar = () => {
  return(
    <div>
      <nav className="fondo-nav navbar navbar-expand-md navbar-light">
        {/* BRAND */}
        <a href="principal.html" className="navbar-brand">
          <img src={logo} alt="logo" width="60%" className="ps-4"></img> 
        </a>
        {/* BOTÓN */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" 
        aria-controls="mainNav" aria-expanded="false" aria-label="Barra de navegación">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* ITEMS */}
        <div className="collapse navbar-collapse" id="mainNav">
          <div className="nav ms-auto">
            <div className="nav pe-3">
              <ModalInicio/>
              {/* <button type="button" className="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#miModal_Inicio">Iniciar sesión</button> */}
              <button type="button" className="btn btn-warning">Registrarse</button>
              
            </div>
          </div>
        </div>
    </nav>
    
  </div>
  );
}

export default NavBar