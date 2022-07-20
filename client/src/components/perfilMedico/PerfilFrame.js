import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import '../../css/perfilMed/perfilMed.css'


const PerfilMed = (props) => {
    const [perfil, setperfil] = useState([]);

    const getperfil = async () => {
        try {
            const response = await fetch(`/medicos/${props.props.id_med}`);
            const jsonData = await response.json();
            setperfil(jsonData);

        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getperfil();
    }, []);

    return (
        <div className='pt-3'>
            <div className='profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden'>
                <div className='banner'></div>
                <img src={require(`../../img/usercard/${props.props.id_med}.jpg`)} alt='Foto de Perfil' className='img-circle mx-auto mb-3' />
                <div className='text-left mb-4'>
                    <p className='mb-2'><i className='fa fa-map-marker-alt mr-2'></i> {perfil.nombre} </p>
                    <p className='mb-2'><i className='fa fa-glasses mr-2'></i>virtual</p>
                    <p className='mb-2'><i className='fa fa-user-md mr-2'></i> S/. 23.00</p>
                    <p className='mb-2'><i className='fa fa-address-card mr-2'></i>Es un buen doctor</p>
                    <p className='mb-2'><i className='fa fa-envelope mr-2'></i> Miercoles: 08:00 - 18:00   Viernes: 08:00 - 18:00</p>
                    <p className='mb-2'><i className='fa fa-map-marker-alt mr-2'></i> {perfil.ubicacion}</p>
                </div>
                <div>
                    <Button className='Primary'>Agendar cita</Button>
                </div>
            </div>
        </div>
    );

};

export default PerfilMed;