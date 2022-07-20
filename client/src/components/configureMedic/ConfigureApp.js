import React, { Fragment, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ConfigureApp() {



  return (
    
      
     
          <form>
            <div className='container-fluid mt-2 mb-3 card border-1'>
              <div className='row'>
                <div className='col-md-12 mt-2 mb-3'>
                  <label>
                    Modalidad
                  
                  </label>
                  <div>
                    <input
                    className='mb-3 ms-2'
                    type='radio'
                    value='Virtual'
                   />
                    Virtual
                   <input
                    className='mb-3 ms-2'
                    type='radio'
                    value='Presencial'
                   />
                   Presencial
                  </div>
                  
                  <label>
                    Dia de la semana
                  </label>
                  <div>
                    <input
                      className='mb-3 ms-2'
                      type='checkbox'
                      
                    />
                    Lunes
                    <input
                      className='mb-3 ms-2'
                      type='checkbox'
                     
                    />
                    Martes
                    <input
                      className='mb-3 ms-2'
                      type='checkbox'
                      
                    />
                    Miercoles
                    <input
                      className='mb-3 ms-2'
                      type='checkbox'
                      
                    />
                    Jueves
                    <input
                      className='mb-3 ms-2'
                      type='checkbox'
                     
                    />
                    Viernes
                    <input
                      className='mb-3 ms-2'
                      type='checkbox'
                     
                    />
                    Sabado
                    </div>
                  <label>
                    Precio
                  </label>
                  <input
                    className='form-control mb-2'
                    type='text'
                    
                  />
                  <label>
                    Fecha
                  </label>
                  
                  <label>
                    Hora
                  </label>
                  <input
                    className='form-control mb-2'
                    type='time'
               
                  />
                  <input
                    className='form-control mb-2'
                    type='time'
               
                  />
                  <label>
                    Link de atencion
                  </label>
                  <input
                    className='form-control mb-2'
                    type='text'
                    placeholder="Zoom" aria-label="Zoom" aria-describedby="addon-wrapping"
                  />
                  
                  <input
                    className='form-control mb-2'
                    type='text'
                    placeholder="Discord" aria-label="Discord" aria-describedby="addon-wrapping"
                  />
                   <input
                    className='form-control mb-2'
                    type='text'
                    placeholder="Meet" aria-label="Meet" aria-describedby="addon-wrapping"
                  />
                  <Button variant='danger btn-sm'>Descartar</Button>
                  <Button className='' variant='success btn-sm' >Guardar </Button>
                
                  
                </div>
              </div>
            </div>
          </form>
       
    
  );
};

