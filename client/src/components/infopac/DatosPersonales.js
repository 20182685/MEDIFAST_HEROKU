import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const DatosPersonales = _ => {
  return(
    <div>
      <h3>Datos Personales</h3>
      <ul className="list-group list-group-flush border border-success">
        <li className="list-group-item"><span className="fw-bold">Edad: </span><span>22</span></li>
        <li className="list-group-item"><span className="fw-bold">Correo: </span><span>Correo: correo@prueba.com</span></li>
        <li className="list-group-item"><span className="fw-bold">Celular: </span><span>987654321</span></li>
        <li className="list-group-item"><span className="fw-bold">Dirección: </span><span>Av. LasManzanas 123</span></li>
        <li className="list-group-item"><span className="fw-bold">DNI: </span><span>79846512</span></li>
      </ul>
    </div>
  );
}

export default DatosPersonales;