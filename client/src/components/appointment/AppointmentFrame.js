import React, { useEffect, useState } from 'react';
import AppointmentList from './AppointmentList.js';
import AppointmentListASC from './AppointmentListASC.js';
import AppointmentListDESC from './AppointmentListDESC.js';
import NewAppointment from './NewAppointment.js';

const AppointmentFrame = (props) => {
  const [seleccion, setSeleccion] = useState('ordenar');

  const [AppointmentListVisible, setAppointmentListVisible] = useState(false);
  const [AppointmentListASCVisible, setAppointmentListASCVisible] = useState(false);
  const [AppointmentListDESCVisible, setAppointmentListDESCVisible] = useState(false);

  useEffect(() => {
    seleccion === 'ordenar' ? setAppointmentListVisible(true) : setAppointmentListVisible(false);
    seleccion === 'cercana' ? setAppointmentListASCVisible(true) : setAppointmentListASCVisible(false);
    seleccion === 'lejana' ? setAppointmentListDESCVisible(true) : setAppointmentListDESCVisible(false);
  }, [seleccion]);

  const handleOnChange = (event) => {
    setSeleccion(event.target.value);
  }

  return (
    <div className='layout-specing'>
      <div className='row'>
        <div className='col-xl-9 col-lg-6 col-md-4'>
          <h5 className='mb-0'>Citas</h5>
          <nav className='d-inline-block mt-2'>
            <ul className='breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0'>
              <li className='breadcrumb-item'><a>Página Principal</a></li>
              <li className='breadcrumb-item active'>Citas</li>
            </ul>
          </nav>
        </div>
        <div className='col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0'>
          <div className='justify-content-md-end'>
            <form>
              <div className='row justify-content-between align-items-center'>
                <div className='col-sm-12 col-md-5'>
                  <div className='mb-0 position-relative'>
                    <select className='form-control time-during select2input select2-hidden-accessible' value={seleccion} onChange={handleOnChange}>
                      <option value='ordenar'>Ordenar</option>
                      <option value='cercana'>Más Cercana</option>
                      <option value='lejana'>Más Lejana</option>
                    </select>
                  </div>
                </div>
                <div className='col-sm-12 col-md-7 mt-4 mt-sm-0'>
                  <div className='d-grid'>
                    <a><NewAppointment /></a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        {AppointmentListVisible && <AppointmentList props={props} />}
        {AppointmentListDESCVisible && <AppointmentListDESC props={props} />}
        {AppointmentListASCVisible && <AppointmentListASC props={props} />}
      </div>
      <div className='row text-center'>
        <div className='col-12 mt-4'>
          <div className='d-md-flex align-items-center text-center justify-content-between'>
            <span className='text-muted me-3'>Mostrando 1 - 10 de 50</span>
            <ul className='pagination justify-content-center mb-0 mt-3 mt-sm-0'>
              <li className='page-item'><a className='page-link' href='javascript:void(0)'>Anterior</a></li>
              <li className='page-item active'><a className='page-link' href='javascript:void(0)'>1</a></li>
              <li className='page-item'><a className='page-link' href='javascript:void(0)'>2</a></li>
              <li className='page-item'><a className='page-link' href='javascript:void(0)'>3</a></li>
              <li className='page-item'><a className='page-link' href='javascript:void(0)'>Siguiente</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentFrame;