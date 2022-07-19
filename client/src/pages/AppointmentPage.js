import React from 'react';
import UserCard from '../components/usercard/UserCard.js';
import Sidebar from '../components/sidebar/Sidebar.js';
import AppointmentFrame from '../components/appointment/AppointmentFrame.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppointmentPage = (props) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <UserCard props={props} />
          <Sidebar />
        </div>
        <div className='col-md-9 pt-3 pb-3'>
          <AppointmentFrame props={props} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;