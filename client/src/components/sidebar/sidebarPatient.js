import React from 'react';
import '../../css/sidebar/Sidebar.css';

const SidebarPatient = () => {
  return (
    <div>
      <nav id='sidebarMenu' className='collapse d-lg-block sidebar collapse bg-white'>
        <div className='position-sticky'>
          <div className='list-group list-group-flush mx-3 mt-4'>
            <a className='list-group-item list-group-item-action py-2 ripple'>
            <a href='http://localhost:3000/' className='list-group-item list-group-item-action py-2 ripple'></a>
              <i className='fas fa-clipboard-user fa-fw me-3'></i><span>Fichas</span></a>
            <a className='list-group-item list-group-item-action py-2 ripple'>
            <a href='http://localhost:3000/attention' className='list-group-item list-group-item-action py-2 ripple'></a>
              <i className='fas fa-book-medical fa-fw me-3'></i><span>Atentiones</span></a>
            <a className='list-group-item list-group-item-action py-2 ripple'>
            <a href='http://localhost:3000/mensajepaciente' className='list-group-item list-group-item-action py-2 ripple'></a>
              <i className='fas fa-comment-medical fa-fw me-3'></i><span>Mensajes</span></a>
            <a className='list-group-item list-group-item-action py-2 ripple'>
            <a href='http://localhost:3000/MedicalSearch' className='list-group-item list-group-item-action py-2 ripple'></a>
              <i className='fas fa-heart fa-fw me-3'></i><span>Busqueda</span></a>
            <a className='list-group-item list-group-item-action py-2 ripple'>
            <a href='http://localhost:3000/' className='list-group-item list-group-item-action py-2 ripple'></a>
              <i className='fas fa-heart fa-fw me-3'></i><span>Recomendaciones</span></a>
            <a className='list-group-item list-group-item-action py-2 ripple'>
            <a href='http://localhost:3000/Login' className='list-group-item list-group-item-action py-2 ripple'></a>
              <i className='fas fa-lock fa-fw me-3'></i><span>Salir</span></a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SidebarPatient;