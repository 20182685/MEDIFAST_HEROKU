import React, { useEffect, useState } from 'react';
import '../../css/MedicalSearch/MedicalSearchFrame.css';

const MedicalSearchList = (props) => {
    const [bus_med, setbuscar] = useState([]);
  
    const getbuscarmedico = async () => {
      try {
        const response = await fetch(`http://localhost:5000/buscarmedico/${props.props.props.id_bus}`);
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
                </tr>
              </thead>
              <tbody>
                {bus_med.map(buscar => (
                  <tr>
                    <td className='p-3'>{buscar.id_bus}</td>
                    <td className='p-3'>{buscar.nombre_bus}</td>
                    <td className='p-3'>{buscar.especialidad_bus}</td>
                    <td className='p-3'>{buscar.tipo_aten}</td>
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