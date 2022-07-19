import React, { useEffect, useState } from 'react';
import PastDiagnostics from './PacientDiagnostics.js';

const PacientAppointments = (props) => {
  const [citas, setCitas] = useState([]);

  const getCitasPorMedico = async () => {
    try {
      const response = await fetch(`http://localhost:5000/citasPorPaciente/${props.props.id_pac}`);
      const jsonData = await response.json();
      setCitas(jsonData);

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCitasPorMedico();
  }, []);

  return (
    <div className='table-responsive bg-white shadow rounded'>
      <table className='table mb-0 table-center'>
        <thead>
          <tr>
            <th className='border-bottom p-3'>ID</th>
            <th className='border-bottom p-3'>Doctor</th>
            <th className='border-bottom p-3'>Especialidad</th>
            <th className='border-bottom p-3'>Fecha</th>
            <th className='border-bottom p-3'>Diagnóstico</th>
            <th className='border-bottom p-3'>Receta</th>
          </tr>
        </thead>
        <tbody>
          {citas.map(cita => (
            <tr>
              <td className='p-3'>{cita.id_cit}</td>
              <td className='p-3'>{cita.nombre} {cita.apellido}</td>
              <td className='p-3'>{cita.especialidad}</td>
              <td className='p-3'>{cita.fecha}</td>
              <td className='p-3'>{cita.diagnostico}</td>
              <td><PastDiagnostics cita={cita} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PacientAppointments;