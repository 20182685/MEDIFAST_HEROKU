import React from 'react';
import PerfilMed from '../components/perfilMedico/PerfilFrame.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const PerfilFrame = (props) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-9 pt-3 pb-3'>
          <PerfilMed props={props} />
        </div>
      </div>
    </div>
  );
};

export default PerfilFrame;