import React, { useEffect, useState } from 'react';

const AttentionList = (props) => {
    const [atencion, setatencion] = useState([]);
  
    const getatencion = async () => {
      try {
        const response = await fetch(`http://localhost:5000/citas/${props.props.props.id_cit}`);
        const response1 = await fetch(`http://localhost:5000/citas1/${props.props.props.id_cit}`);
        const response2 = await fetch(`http://localhost:5000/medicos/${props.props.props.id_med}`);
        const response3 = await fetch(`http://localhost:5000/recetas/${props.props.props.id_cit}`);
        
        const jsonData = await response.json();
        const jsonData1 = await response1.json();
        const jsonData2 = await response2.json();
        const jsonData3 = await response3.json();

        setatencion(jsonData, jsonData1, jsonData2, jsonData3);
  
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
                  <th className='border-bottom p-3'>fecha de cita</th>
                  <th className='border-bottom p-3'>doctor</th>
                  <th className='border-bottom p-3'>diagnostico</th>
                  <th className='border-bottom p-3'>receta</th>
                </tr>
              </thead>
              <tbody>
                {atencion.map(aten => (
                  <tr>
                    <td className='p-3'>{aten.fecha}</td>
                    <td className='p-3'>{aten.nombre} {aten.apellido}</td>
                    <td className='p-3'>{aten.diagnostico}</td>
                    <td className='p-3'>{aten.receta}</td>
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