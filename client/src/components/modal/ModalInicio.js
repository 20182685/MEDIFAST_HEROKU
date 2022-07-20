import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';


const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="titulo row mx-auto ps-5">
            <div className='container'>
              <span className="text-end col tit1 p-0">Medic</span>
              <span className="text-start col tit2 p-0">Fast</span>
            </div>
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <legend className="subtitulo-form ms-4">Iniciar Sesión</legend>
          <div className="container border p-5">  
            <div className="form-group form-floating mb-4 col-12 mx-auto">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
              <label for="floatingInput">Correo Electronico</label>
            </div>
    
            <div className="form-group form-floating mb-4 col-12 mx-auto">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
              <label for="floatingPassword">Contraseña</label>
            </div>
    
            <div className="row mt-4">
              <div className="row col-8 mx-auto">
                <div className="col-4 mx-auto form-check form-check-inline">
                  <input className="form-check-input pe-2" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label className="form-check-label pe-4" for="inlineRadio1">Paciente</label>
                </div>
                <div className="col-4 mx-auto form-check form-check-inline">
                  <input className="form-check-input pe-2" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                  <label className="form-check-label pe-4" for="inlineRadio2">Doctor</label>
                </div>
              </div>

              
            </div>
            {/* ms-5 ps-4 */}
            <div className="d-grid gap-2 col-6 mx-auto">
              {/* <!--FALTA DERIVAR A LA INTERFAZ DE INICIO--> */}
            </div>
          </div>
        </form>
        {/* **************************************FALTA VER EL REGISTRO DEL BOTÓN************************************** */}
        <button type="submit" className="boton col-12 btn btn-success fw-bold" onclick="register()">Ingresar</button>
      </Modal.Body>
      <Modal.Footer>
        <p><a href="principal.html">Aún no me registro</a></p>
      </Modal.Footer>
    </Modal>
  );
}

const ModalInicio = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Iniciar Sesión
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default ModalInicio