import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const FormInter = _ => {
  return(
    <div className='container vh-80 mt-5 mb-5 justify-content-center align-items-center border border-danger'>
      <div class="row mt-4 justify-content-evenly mb-5 mt-5">
        <button type="submit" class="boton mt-5 mb-5 col-8 btn btn-success fw-bold">Médico</button>
      </div>
      {/* // <div class="col-6 d-flex justify-content-center ">
      //   <button type="submit" class="boton col-8 btn btn-success fw-bold">Ingresar notas</button>
      // </div>
      // <div class="col-6 d-flex justify-content-center ">
      //   <button type="submit" class="boton col-8 btn btn-success fw-bold">Citas Previas</button>
      // </div> */}
      <div class="row mt-4 justify-content-evenly mb-5 mt-5">
        <button type="submit" class="boton mt-5 mb-5 col-8 btn btn-success fw-bold">Paciente</button>
      </div>
    </div>
  );
    
}
export default FormInter