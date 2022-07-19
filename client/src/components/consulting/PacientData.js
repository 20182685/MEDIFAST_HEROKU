import React, { useEffect, useState } from 'react';

const PacientData = (props) => {
  const [pacientes, setPacientes] = useState([]);

  const getMedicos = async () => {
    try {
      const response = await fetch(`http://localhost:5000/pacientes/${props.props.id_pac}`);
      const jsonData = await response.json();
      setPacientes(jsonData);

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getMedicos();
  }, []);

  return (
    <div className='bg-white rounded shadow overflow-hidden'>
      <div className='card border-0'>
      </div>
      <div className='text-center avatar-profile margin-nagative mt-4 position-relative pb-4 border-bottom'>
        <h6 className='mt-3 mb-1'>{pacientes.nombre} {pacientes.apellido}</h6>
        <p className='text-muted mb-0'>{pacientes.edad} años</p>
      </div>
      <div className='list-unstyled p-4'>
        <div className='d-flex align-items-center mt-2'>
          <i className='uil uil-user align-text-bottom text-primary h5 mb-0 me-2'></i>
          <h6 className='mb-0'>Género</h6>
          <p className='text-muted mb-0 ms-2'>{pacientes.genero}</p>
        </div>
        <div className='d-flex align-items-center mt-2'>
          <i className='uil uil-envelope align-text-bottom text-primary h5 mb-0 me-2'></i>
          <h6 className='mb-0'>Nacimiento</h6>
          <p className='text-muted mb-0 ms-2'>{pacientes.nacimiento}</p>
        </div>
        <div className='d-flex align-items-center mt-2'>
          <i className='uil uil-book-open align-text-bottom text-primary h5 mb-0 me-2'></i>
          <h6 className='mb-0'>Teléfono</h6>
          <p className='text-muted mb-0 ms-2'>{pacientes.telefono}</p>
        </div>
        <div className='d-flex align-items-center mt-2'>
          <i className='uil uil-italic align-text-bottom text-primary h5 mb-0 me-2'></i>
          <h6 className='mb-0'>Dirección</h6>
          <p className='text-muted mb-0 ms-2'>{pacientes.direccion}</p>
        </div>
        <div className='d-flex align-items-center mt-2'>
          <i className='uil uil-medical-drip align-text-bottom text-primary h5 mb-0 me-2'></i>
          <h6 className='mb-0'>Grupo Sanguíneo</h6>
          <p className='text-muted mb-0 ms-2'>{pacientes.grupo_sanguineo}</p>
        </div>
      </div>
    </div>
  );
};

export default PacientData;