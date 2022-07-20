import React from 'react';
import SidebarPatient from '../components/sidebar/sidebarPatient.js';
import AttentionFrame from '../components/attention/AttentionFrame.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const AttentionPage = (props) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <SidebarPatient />
        </div>
        <div className='col-md-9 pt-3 pb-3'>
          <AttentionFrame props={props} />
        </div>
      </div>
    </div>
  );
};

export default AttentionPage;