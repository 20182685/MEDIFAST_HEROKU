import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import ReviewListASC from './ReviewListASC';
import ReviewListDESC from './ReviewListDESC';

const ReviewFrame = (props) => {
  const [seleccion, setSeleccion] = useState('ordenar');

  const [ReviewListVisible, setReviewListVisible] = useState(false);
  const [ReviewListASCVisible, setReviewListASCVisible] = useState(false);
  const [ReviewListDESCVisible, setReviewListDESCVisible] = useState(false);

  useEffect(() => {
    seleccion === 'ordenar' ? setReviewListVisible(true) : setReviewListVisible(false);
    seleccion === 'alta' ? setReviewListDESCVisible(true) : setReviewListDESCVisible(false);
    seleccion === 'baja' ? setReviewListASCVisible(true) : setReviewListASCVisible(false);
  }, [seleccion]);

  const handleOnChange = (event) => {
    setSeleccion(event.target.value);
  }

  return (
    <div className='layout-specing'>
      <div className='d-md-flex justify-content-between'>
        <div className='col-xl-9 col-lg-6 col-md-4'>
          <h5 className='mb-0'>Comentarios</h5>
          <nav className='d-inline-block mt-2'>
            <ul className='breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0'>
              <li className='breadcrumb-item'><a>Página Principal</a></li>
              <li className='breadcrumb-item active'>Comentarios</li>
            </ul>
          </nav>
        </div>
        <div className='mt-4 mt-md-0'>
          <div className='justify-content-md-end'>
            <form>
              <div className='row justify-content-between align-items-center'>
                <div className='mt-4 mt-md-0'>
                  <div className='mb-0 position-relative'>
                    <select className='form-control time-during select2input select2-hidden-accessible' value={seleccion} onChange={handleOnChange}>
                      <option value='ordenar'>Ordenar</option>
                      <option value='alta'>Más Alta</option>
                      <option value='baja'>Más Baja</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        {ReviewListVisible && <ReviewList props={props} />}
        {ReviewListDESCVisible && <ReviewListDESC props={props} />}
        {ReviewListASCVisible && <ReviewListASC props={props} />}
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

export default ReviewFrame;