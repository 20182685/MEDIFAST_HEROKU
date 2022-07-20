import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import foto from '../../img/paciente/Gabriel.jpg'

const Paciente = _ => {
  return(
    <div>
      <div className="row ps-4">
        <h1 className="col">Gabriel Cruz</h1>
      </div>
      <div className="row ps-4">
        <figure>
          <img src={foto} alt="foto_paciente" width="70%" />
        </figure>
      </div>
    </div>
  );
}

export default Paciente