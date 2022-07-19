import React, { Fragment, useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PastDiagnostics = ({cita}) => {
  const [show, setShow] = useState(false);
  const [receta, setReceta] = useState([]);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const getReceta = async () => {
    try {
      const response = await fetch(`http://localhost:5000/recetas/${cita.id_cit}`);
      const jsonData = await response.json();
      setReceta(jsonData);

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getReceta();
  }, []);

  return (
    <Fragment>
      <Button variant='btn btn-success btn-sm' onClick={handleShow}>Ver</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Receta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='table-responsive bg-white shadow rounded mt-3'>
            <table className='table mb-0 table-center'>
              <thead>
                <tr>
                  <th className='border-bottom p-3'>Medicamento</th>
                  <th className='border-bottom p-3'>Cantidad (Unidades)</th>
                  <th className='border-bottom p-3'>Frecuencia (C/Horas)</th>
                  <th className='border-bottom p-3'>Duración (Días)</th>
                </tr>
              </thead>
              <tbody>
                {receta.map(registro => (
                  <tr>
                    <td className='p-3'>{registro.medicamento}</td>
                    <td className='p-3'>{registro.cantidad}</td>
                    <td className='p-3'>{registro.frecuencia}</td>
                    <td className='p-3'>{registro.duracion}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger btn-sm' onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default PastDiagnostics;