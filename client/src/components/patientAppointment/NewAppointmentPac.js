import React, { Fragment, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NewAppointment() {

  var random = Math.floor(1000 + Math.random() * 9000);

  const [id_cit, setId_cita] = useState('');
  const [id_med, setId_med] = useState('');
  const [id_pac, setId_pac] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const [medicos, setMedicos] = useState([]);

  const postCita = async (event) => {
    event.preventDefault();

    try {
      const body = { id_cit, id_med, id_pac, fecha, hora, modalidad };
      const response = await fetch('http://localhost:5000/appointmentPaciente', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body)
      });

      window.location.reload();

    } catch (error) {
      console.error(error.message);
    }
  };

  const getMedicos = async () => {
    try {
      const response = await fetch('http://localhost:5000/medicos');
      const jsonData = await response.json();
      setMedicos(jsonData);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getMedicos();
  }, []);


  return (
    <Fragment>
      <form className='justify-content-center'>
        <div className='container-fluid col-5 mt-2 mb-3 card border-1'>
          <h3>Datos de Reserva</h3>
          <div className='row'>
            <div className='mt-2'>
              <label>
                Modalidad:
              </label>
              <select
                className='form-control mb-2'
                onChange={event => setModalidad(event.target.value)}>
                <option value="Presencial">Presencial</option>
                <option value="Virtual">Virtual</option>
              </select>
              <label>
                Médico
              </label>
              <select
                className='form-control mb-2'
                placeholder='Elija un médico de la lista'
                onChange={event => setId_med(event.target.value)}>
                {medicos.map(med => (
                  <option value={med.id_med}>{med.id_nombre}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='col mt-2 mb-3'>
              <label>
                Fecha
              </label>
              <input
                className='form-control mb-2'
                type='date'
                defaultValue={fecha}
                onChange={event => setFecha(event.target.value)}
              />
            </div>
            <div className='col mt-2 mb-3'>
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

          <div className='row'>
            <h3>Opciones de Pago</h3>
            <div className='col mt-2'>
              <label>
                Número de Tarjeta:
              </label>
              <input
                className='form-control mb-2'
                placeholder='Introduzca tarjeta de credito o debito'>
              </input>
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col mt-2'>
              <label>
                Fecha de Expiración
              </label>
              <input
                className='form-control mb-2'
                placeholder='dd/mm/aa'>
              </input>
            </div>

            <div className='col-3 mt-2'>
              <label>
                CVV
              </label>
              <input
                className='form-control mb-2'
                placeholder='-'>
              </input>
            </div>
          </div>
          <Button variant='success' className='col-3 mb-2' onClick={postCita}>Reservar Cita</Button>
        </div>

      </form >
    </Fragment >
  );
};