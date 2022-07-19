import React, { useEffect, useState } from 'react';
import '../../css/reviews/ReviewList.css';

const ReviewList = (props) => {
  const [comentarios, setComentarios] = useState([]);

  const getComentarios = async () => {
    try {
      const response = await fetch(`http://localhost:5000/comentariosPorMedico/${props.props.props.id_med}`);
      const jsonData = await response.json();
      setComentarios(jsonData);

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getComentarios();
  }, []);

  return (
    <div className='row'>
      <div className='col-12 mt-4'>
        <div className='table-responsive bg-white shadow rounded'>
          <table className='table mb-0 table-center'>
            <thead>
              <tr>
                <th className='border-bottom p-3'>#</th>
                <th className='border-bottom p-3'>Nombre</th>
                <th className='border-bottom p-3'>Email</th>
                <th className='border-bottom p-3'>Calificación</th>
                <th className='border-bottom p-3'>Comentario</th>
                <th className='border-bottom p-3'>Fecha</th>
                <th className='border-bottom p-3'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {comentarios.map(comentario => (
                <tr>
                  <td className='p-3'>{comentario.id_com}</td>
                  <td className='p-3'>{comentario.nombre} {comentario.apellido}</td>
                  <td className='p-3'>{comentario.email}</td>
                  <td className='p-3'>{comentario.calificacion}</td>
                  <td className='p-3 text-muted'>{comentario.comentario}</td>
                  <td className='p-3'>{comentario.fecha}</td>
                  <td className='p-3'><a href='#' className='btn btn-sm btn-danger'>Descartar</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ReviewList;