import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import '../../css/MedicalSearch/MedicalSearchFrame.css';

const MedicalSearchList = () => {
    const [bus_med, setbuscar] = useState([]);
  
    const getbuscarmedico = async () => {
      try {
        const response = await fetch("/medicos");
        const jsonData = await response.json();
        setbuscar(jsonData);
  
      } catch (error) {
        console.error(error.message);
      }
    };
  
    useEffect(() => {
      getbuscarmedico();
    }, []);
  
    return (
      <div className='row'>
        <div className='col-12 mt-4'>
          <div className='table-responsive bg-white shadow rounded'>
            <table className='table mb-0 table-center'>
              <thead>
                <tr>
                  <th className='border-bottom p-3'>ID</th>
                  <th className='border-bottom p-3'>Nombre del medico</th>
                  <th className='border-bottom p-3'>Especialidad</th>
                  <th className='border-bottom p-3'>Tipo de atención</th>
                  <th className='border-bottom p-3'>Ficha</th>
                </tr>
              </thead>
              <tbody>
                {bus_med.map(buscar => (
                  <tr>
                    <td className='p-3'>{buscar.id_med}</td>
                    <td className='p-3'>{buscar.nombre}</td>
                    <td className='p-3'>{buscar.especialidad}</td>
                    <td className='p-3'>Virtual</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  
  export default MedicalSearchList;