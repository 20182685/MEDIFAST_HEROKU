import React, { useState } from 'react';
import NewAppointment from '../appointment/NewAppointment.js';
import PacientSearch from './PacientSearch.js';
import '../../css/consulting/ConsultingFrame.css';

const Consulting = () => {
  const [search, setSearch] = useState('0001');

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    setSearch(search);
  };

  return (
    <div className='layout-specing'>
      <div className='row'>
        <div className='d-md-flex justify-content-between'>
          <div className='col-xl-9 col-lg-6 col-md-4'>
            <h5 className='mb-0'>Consulta</h5>
            <nav className='d-inline-block mt-2'>
              <ul className='breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0'>
                <li className='breadcrumb-item'><a>Página Principal</a></li>
                <li className='breadcrumb-item active'>Consulta</li>
              </ul>
            </nav>
          </div>
          <div className='mt-4 mt-sm-0'>
            <div className='d-grid'>
              <a><NewAppointment /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <input
          type='text'
          placeholder='Ingresar ID de Paciente'
          value={search}
          onChange={handleChange}/>
        <button onClick={handleClick}>Buscar</button>
      </div>
      <div>
        <PacientSearch id_pac={search} />
      </div>
    </div>
  );
};

export default Consulting;