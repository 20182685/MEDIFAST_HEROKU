import React, { useEffect, useState } from 'react';

const AttentionList = () => {
    const [atencion, setatencion] = useState([]);
  
    const getatencion = async () => {
      try {
        const response = await fetch(`/citas`);
        const jsonData = await response.json();
        setatencion(jsonData);
  
      } catch (error) {
        console.error(error.message);
      }
    };
  
    useEffect(() => {
      getatencion();
    }, []);
  
    return (
      <div className='row'>
        <div className='col-12 mt-4'>
          <div className='table-responsive bg-white shadow rounded'>
            <table className='table mb-0 table-center'>
              <thead>
                <tr>
                  <th className='border-bottom p-3'>ID</th>
                  <th className='border-bottom p-3'>Nombre</th>
                  <th className='border-bottom p-3'>fecha de cita</th>
                  <th className='border-bottom p-3'>diagnostico</th>
                  <th className='border-bottom p-3'>Receta</th>
                </tr>
              </thead>
              <tbody>
                {atencion.map(aten => (
                  <tr>
                    <td className='p-3'>{aten.id_cit}</td>
                    <td className='p-3'>Doctor Muerte</td>
                    <td className='p-3'>{aten.fecha}</td>
                    <td className='p-3'>{aten.diagnostico}</td>
                    <td className='p-3'>Salbutamol</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  
  export default AttentionList;