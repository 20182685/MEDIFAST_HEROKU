import React, { useEffect, useState } from 'react';

export default function PatientAppointments(props) {
  const [citas, setCitas] = useState([]);

  const getCitasPorPaciente = async () => {
    try {
      const response = await fetch(`http://localhost:5000/citasPorPaciente/${props.props.props.id_pac}`);
      const jsonData = await response.json();
      setCitas(jsonData);

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCitasPorPaciente();
  }, []);

  return (
    <div className='row'>
      <div className='col-12 mt-4'>
        <div className='table-responsive bg-white shadow rounded'>
          <table className='table mb-0 table-center'>
            <thead>
              <tr>
                <th className='border-bottom p-3'>ID Cita</th>
                <th className='border-bottom p-3'>Fecha</th>
                <th className='border-bottom p-3'>Hora</th>
                <th className='border-bottom p-3'>Medico</th>
                <th className='border-bottom p-3'>Especialidad</th>
                <th className='border-bottom p-3'>Modalidad</th>

              </tr>
            </thead>
            <tbody>
              {citas.map(cita => (
                <tr>
                  <td className='p-3'>{cita.id_cit}</td>
                  <td className='p-3'>{cita.fecha}</td>
                  <td className='p-3'>{cita.hora}</td>
                  <td className='p-3'>{cita.nombre} {cita.apellido}</td>
                  <td className='p-3'>{cita.especialidad}</td>
                  <td className='p-3'>{cita.modalidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}