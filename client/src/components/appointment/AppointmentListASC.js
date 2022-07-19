import React, { useEffect, useState } from 'react';
import Attend from './Attend.js';
import Reeschedule from './Reschedule.js'
import '../../css/appointment/AppointmentList.css'

const AppointmentListASC = (props) => {
  const [citas, setCitas] = useState([]);

  const getCitasPorMedico = async () => {
    try {
      const response = await fetch(`http://localhost:5000/citasPorMedicoYCercania/${props.props.props.id_med}`);
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
    <div className='row'>
      <div className='col-12 mt-4'>
        <div className='table-responsive bg-white shadow rounded'>
          <table className='table mb-0 table-center'>
            <thead>
              <tr>
                <th className='border-bottom p-3'>ID</th>
                <th className='border-bottom p-3'>Nombres</th>
                <th className='border-bottom p-3'>Email</th>
                <th className='border-bottom p-3'>Edad</th>
                <th className='border-bottom p-3'>Género</th>
                <th className='border-bottom p-3'>Especialidad</th>
                <th className='border-bottom p-3'>Fecha</th>
                <th className='border-bottom p-3'>Hora</th>
                <th className='border-bottom p-3'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {citas.map(cita => (
                <tr>
                  <td className='p-3'>{cita.id_cit}</td>
                  <td className='p-3'>{cita.nombre} {cita.apellido}</td>
                  <td className='p-3'>{cita.email}</td>
                  <td className='p-3'>{cita.edad}</td>
                  <td className='p-3'>{cita.genero}</td>
                  <td className='p-3'>{cita.especialidad}</td>
                  <td className='p-3'>{cita.fecha}</td>
                  <td className='p-3'>{cita.hora}</td>
                  <td className='text-end p-3'>
                    <a><Attend cita={cita} /></a>
                    <a><Reeschedule cita={cita} /></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AppointmentListASC;