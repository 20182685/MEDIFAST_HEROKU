import React from 'react';
import UserCard from '../components/usercard/UserCard.js';
import Sidebar from '../components/sidebar/Sidebar.js';
import CalendarDep from '../components/calendar/CalendarDep.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const CalendarPage = (props) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <UserCard props={props} />
          <Sidebar />
        </div>
        <div className='col-md-9 pt-3 pb-3'>
          <CalendarDep />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;