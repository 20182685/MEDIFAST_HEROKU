import React, { Fragment, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NewAppointment() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  var random = Math.floor(1000 + Math.random() * 9000);

  const [id_cit, setId_cita] = useState(random);
  const [id_med, setId_med] = useState('');
  const [id_pac, setId_pac] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [diagnostico, setDiagnostico] = useState('');

  const postCita = async (event) => {
    event.preventDefault();

    try {
      const body = { id_cit, id_med, id_pac, fecha, hora, diagnostico };
      const response = await fetch('http://localhost:5000/citas', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body)
      });

      window.location.reload();

    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <Button variant='primary' onClick={handleShow}>Agregar Cita</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='container-fluid mt-2 mb-3 card border-1'>
              <div className='row'>
                <div className='col-md-12 mt-2 mb-3'>
                  <label>
                    N° Cita
                  </label>
                  <input
                    className='form-control mb-2'
                    type='text'
                    defaultValue={id_cit}
                    onChange={event => setId_cita(event.target.value)}
                  />
                  <label>
                    Código de Médico
                  </label>
                  <input
                    className='form-control mb-2'
                    type='text'
                    defaultValue={id_med}
                    onChange={event => setId_med(event.target.value)}
                  />
                  <label>
                    Código de Paciente
                  </label>
                  <input
                    className='form-control mb-2'
                    type='text'
                    defaultValue={id_pac}
                    onChange={event => setId_pac(event.target.value)}
                  />
                  <label>
                    Fecha
                  </label>
                  <input
                    className='form-control mb-2'
                    type='date'
                    defaultValue={fecha}
                    onChange={event => setFecha(event.target.value)}
                  />
                  <label>
                    Hora
                  </label>
                  <input
                    className='form-control mb-2'
                    type='time'
                    defaultValue={hora}
                    onChange={event => setHora(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger btn-sm' onClick={handleClose}>Cerrar</Button>
          <Button variant='success btn-sm' onClick={event => postCita(event)}>Agendar</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};