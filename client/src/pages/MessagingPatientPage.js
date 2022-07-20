import React from 'react';
import Sidebar from '../components/sidebar/sidebarPatient';
import Chat from '../components/Patientmessaging/chatPatient.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const MessagingPage = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9 pt-3 pb-3'>
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingPage;