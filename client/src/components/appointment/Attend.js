import React, { Fragment, useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NewAppointment({ cita }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setDiagnostico(cita.diagnostico);
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const [diagnostico, setDiagnostico] = useState('');

  const putDiagnostico = async (event) => {
    event.preventDefault();

    try {
      const body = { diagnostico };
      const response = await fetch(`http://localhost:5000/citas1/${cita.id_cit}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body)
      });

      window.location.reload();

    } catch (error) {
      console.error(error.message);
    }
  };

  const [recetas, setRecetas] = useState([]);

  const deleteReceta = async (id_rec) => {
    try {
      const deleteReceta = await fetch(`http://localhost:5000/recetas/${id_rec}`, {
        method: 'DELETE'
      });

      setRecetas(recetas);

      window.location.reload();

    } catch (error) {
      console.error(error.message)
    }
  };

  const getRecetas = async () => {
    try {
      const response = await fetch(`http://localhost:5000/recetas/${cita.id_cit}`);
      const jsonData = await response.json();
      setRecetas(jsonData);

    } catch (error) {
      console.error(error.message);
    }
  };

  var random = Math.floor(1000 + Math.random() * 9000);

  const [id_rec, setId_rec] = useState(random);
  const [id_cit, setId_cit] = useState(cita.id_cit);
  const [medicamento, setMedicamento] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [frecuencia, setFrecuencia] = useState('');
  const [duracion, setDuracion] = useState('');

  const postReceta = async (event) => {
    event.preventDefault();

    try {
      const body = { id_rec, id_cit, medicamento, cantidad, frecuencia, duracion };
      const response = fetch(`http://localhost:5000/recetas/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      window.location.reload();

    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getRecetas();
  }, []);

  return (
    <Fragment>
      <Button variant='btn btn-success btn-sm' onClick={handleShow}>Atender</Button>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro Médico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Diagnóstico</h5>
          <form>
            <div className='container-fluid mt-2 mb-3 card border-1'>
              <div className='row'>
                <div className='col-md-12 mt-2 mb-3'>
                  <textarea
                    className='form-control'
                    type='text'
                    rows='3'
                    defaultValue={diagnostico}
                    onChange={event => setDiagnostico(event.target.value)} />
                </div>
              </div>
            </div>
          </form>
          <div class='row'>
            <div class='col-md-3'>
              <h5>Indicación</h5>
              <form>
                <div className='container-fluid mt-2 mb-3 card border-1'>
                  <div className='row'>
                    <div className='col-md-12 mt-2 mb-3'>
                      <label>
                        Medicamento
                      </label>
                      <input
                        type='text'
                        className='form-control mb-2'
                        defaultValue={medicamento}
                        onChange={event => setMedicamento(event.target.value)}
                      />
                      <label>
                        Cantidad (Unidades)
                      </label>
                      <input
                        type='text'
                        className='form-control mb-2'
                        defaultValue={cantidad}
                        onChange={event => setCantidad(event.target.value)}
                      />
                      <label>
                        Frecuencia (C/Horas)
                      </label>
                      <input
                        type='text'
                        className='form-control mb-2'
                        defaultValue={frecuencia}
                        onChange={event => setFrecuencia(event.target.value)}
                      />
                      <label>
                        Duración (Días)
                      </label>
                      <input
                        type='text'
                        className='form-control mb-2'
                        defaultValue={duracion}
                        onChange={event => setDuracion(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <Button variant='primary btn-sm' onClick={event => postReceta(event)}>Agregar</Button>
                  </div>
                </div>
              </form>
            </div>
            <div class='col-md-9'>
              <h5>Receta</h5>
              <div className='table-responsive bg-white shadow rounded'>
                <table className='table mb-0 table-center'>
                  <thead>
                    <tr>
                      <th className='border-bottom p-3'>Medicamento</th>
                      <th className='border-bottom p-3'>Cantidad (Unidades)</th>
                      <th className='border-bottom p-3'>Frecuencia (C/Horas)</th>
                      <th className='border-bottom p-3'>Duración (Días)</th>
                      <th className='border-bottom p-3'>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recetas.map(receta => (
                      <tr>
                        <td className='p-3'>{receta.medicamento}</td>
                        <td className='p-3'>{receta.cantidad}</td>
                        <td className='p-3'>{receta.frecuencia}</td>
                        <td className='p-3'>{receta.duracion}</td>
                        <td><button
                          className='btn btn-danger btn-sm'
                          onClick={() => deleteReceta(receta.id_rec)}>Eliminar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger btn-sm' onClick={handleClose}>Cerrar</Button>
          <Button variant='success btn-sm' onClick={event => putDiagnostico(event)}>Guardar</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};