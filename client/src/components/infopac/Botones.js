import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const Botones = _ => {
  return(
    <div class="row mt-4 justify-content-evenly mb-5">
      <div class="col-6 d-flex justify-content-center ">
        <button type="submit" class="boton col-8 btn btn-success fw-bold">Ingresar notas</button>
      </div>
      <div class="col-6 d-flex justify-content-center ">
        <button type="submit" class="boton col-8 btn btn-success fw-bold">Citas Previas</button>
      </div>
    </div>
  );
}

export default Botones