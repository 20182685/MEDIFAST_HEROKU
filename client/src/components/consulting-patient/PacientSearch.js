import React from 'react';
import PacientData from './PacientData.js';
import PacientAppointments from './PacientAppointments.js';

const PacientSearch = (props) => {
  return (
    <div className='layout-specing mt-3'>
      <div className='row'>
        <div className='col-md-4'>
          <h5>Datos Personales</h5>
          <PacientData props={props} />
        </div>
        <div className='col-md-8'>
          <h5>Historia Clínica</h5>
          <PacientAppointments props={props} />
        </div>
      </div>
    </div>
  );
};

export default PacientSearch;