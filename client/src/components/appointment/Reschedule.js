import React, { Fragment, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Reeschedule({ cita }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setFecha(cita.fecha);
    setHora(cita.hora);
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const [fecha, setFecha] = useState(cita.fecha);
  const [hora, setHora] = useState(cita.hora);

  const updateCita = async (event) => {
    event.preventDefault();

    try {
      const body = { fecha, hora };
      const response = await fetch(`http://localhost:5000/citas/${cita.id_cit}`, {
        method: 'PUT',
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
      <Button variant='btn btn-warning btn-sm' onClick={handleShow}>Reagendar</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reagendar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className='form-control'
            type='date'
            defaultValue={fecha}
            onChange={event => setFecha(event.target.value)} />
            <input
            className='form-control'
            type='time'
            defaultValue={hora}
            onChange={event => setHora(event.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger btn-sm' onClick={handleClose}>Cerrar</Button>
          <Button variant='warning btn-sm' onClick={event => updateCita(event)}>Reagendar</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};