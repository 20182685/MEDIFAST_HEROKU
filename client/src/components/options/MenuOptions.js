import React, { Fragment, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MenuOptions() {

    return (



        <form>
            <div className='container-fluid mt-2 mb-3 card border-1'>
                <div className='row'>
                    <div className='col-md-12 mt-2 mb-3'>
                        <h3>
                            Manejo Citas
                        </h3>
                        <div>
                            <Button className='mx-auto col-md-6 mt-4 boton btn btn-primary fw-bold btn-lg' variant='primary btn-sm'>
                            <a href='http://localhost:3000/calendar' className='mx-auto col-md-6 mt-4 boton btn btn-primary fw-bold btn-lg'>
                                Proximas citas</a></Button>
                            
                        </div>
                        <div>
                            <Button className='mx-auto col-md-6 mt-4 boton btn btn-primary fw-bold btn-lg' variant='primary btn-sm' >
                            <a href='http://localhost:3000/calendar' className='mx-auto col-md-6 mt-4 boton btn btn-primary fw-bold btn-lg '>
                                Calendario Citas </a></Button>
                        </div>
                        <div>
                            <Button className='mx-auto col-md-6 mt-4 boton btn btn-primary fw-bold btn-lg' variant='primary btn-sm' >
                            <a href='http://localhost:3000/appointments' className='mx-auto col-md-6 mt-4 boton btn btn-primary fw-bold btn-lg '>Historial Citas </a></Button>
                        </div>
                        <h3>
                            Consultas
                        </h3>
                        <div className="container">

                            <div class="col-6 " align="center">
                                <Button className='mx-auto col-md-6 mt-4 boton btn btn-primary fw-bold btn-lg' variant='primary btn-sm' >
                                <a href='http://localhost:3000/appointments' className='mx-auto col-md-6 mt-4 boton btn btn-primary fw-bold btn-lg '>Privadas </a> </Button>
                            </div>
                            <div class="col-6" align="center">
                                <Button className='mx-auto col-md-6 mt-4 boton btn btn-primary fw-bold btn-lg' variant='primary btn-sm' >
                                <a href='http://localhost:3000/appointments' className='mx-auto col-md-6 mt-4 boton btn btn-primary fw-bold btn-lg '>Publicas</a></Button>
                            </div>
                        </div>
                        <h3>
                            Comentarios
                        </h3>
                            <Button className='mx-auto col-md-6 mt-4 boton btn btn-primary fw-bold btn-lg' variant='primary btn-sm' >
                            <a href='http://localhost:3000/reviews' className='mx-auto col-md-6 mt-4 boton btn btn-primary fw-bold btn-lg '> Ver</a> </Button>

                    </div>
                </div>
            </div>
        </form>


    );


};