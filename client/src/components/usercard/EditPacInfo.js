import React, { Fragment, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EditPacInfo({ paciente }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nacimiento, setNacimiento] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('');
  const [grupo_sanguineo, setGrupoSanguineo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');


  const updateMedico = async (event) => {
    event.preventDefault();
    try {
      const body = { nombre, apellido, nacimiento, edad, email, telefono, web, ubicacion };
      const response = await fetch(`http://localhost:5000/mis_datos_UPDT/${paciente}`, {
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
                Nacimiento:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={nacimiento}
                onChange={event => setNacimiento(event.target.value)} />
            <label>
                Edad:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={edad}
                onChange={event => setEdad(event.target.value)} />
            <label>
                Genero:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={genero}
                onChange={event => setGenero(event.target.value)} />
            <label>
                Telefono:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={grupo_sanguineo}
                onChange={event => setGrupoSanguineo(event.target.value)} />
            <label>
               Web:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={direccion}
                onChange={event => setDireccion(event.target.value)} />
            <label>
                Ubicacion:
            </label>
            <input
                className='form-control'
                type='text'
                defaultValue={telefono}
                onChange={event => setTelefono(event.target.value)} />
            <input
                className='form-control'
                type='text'
                defaultValue={email}
                onChange={event => setEmail(event.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger btn-sm' onClick={handleClose}>Cerrar</Button>
          <Button variant='warning btn-sm' onClick={event => updateMedico(event)}>Editar Información</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};