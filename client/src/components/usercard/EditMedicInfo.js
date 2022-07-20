import React, { Fragment, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EditMedicInfo({ medico }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cmp, setCMP] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [web, setWeb] = useState('');
  const [ubicacion, setUbicacion] = useState('');


  const updateMedico = async (event) => {
    event.preventDefault();
    try {
      const body = { nombre, apellido, cmp, especialidad, email, telefono, web, ubicacion };
      const response = await fetch(`http://localhost:5000/mis_datos_MED_UPDT/${medico}`, {
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
      <Button variant='warning' className='btn-sm' onClick={handleShow} >Editar Información</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>
                Nombre:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={nombre}
                onChange={event => setNombre(event.target.value)} />
            <label>
                Apellido:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={apellido}
                onChange={event => setApellido(event.target.value)} />
            <label>
                CMP:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={cmp}
                onChange={event => setCMP(event.target.value)} />
            <label>
                Especialidad:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={especialidad}
                onChange={event => setEspecialidad(event.target.value)} />
            <label>
                E-mail:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={email}
                onChange={event => setEmail(event.target.value)} />
            <label>
                Telefono:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={telefono}
                onChange={event => setTelefono(event.target.value)} />
            <label>
               Web:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={web}
                onChange={event => setWeb(event.target.value)} />
            <label>
                Ubicacion:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={ubicacion}
                onChange={event => setUbicacion(event.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger btn-sm' onClick={handleClose}>Cerrar</Button>
          <Button variant='warning btn-sm' onClick={event => updateMedico(event)}>Editar Información</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};