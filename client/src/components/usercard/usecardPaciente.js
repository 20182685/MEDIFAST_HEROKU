import React, { useEffect, useState } from 'react';
import '../../css/usercard/UserCard.css';
import EditPacInfo from './EditPacInfo';


const UserCard = (props) => {
	const [paciente, setPaciente] = useState([]);

	const getPaciente = async () => {
		try {
			const response = await fetch(`http://localhost:5000/pacientes/${props.props.id_pac}`);
			const jsonData = await response.json();
			setPaciente(jsonData);

		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getPaciente();
	}, []);

	return (
		<div className='pt-3'>
			<div className='profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden'>
                <img src={require(`../../img/usercard/${props.props.id_pac}.jpg`)} alt='Foto de Perfil' className='img-circle mx-auto mb-3' />
				<h3 className='mb-4'>{paciente.nombre} {paciente.apellido}</h3>
				<div className='text-left mb-4'>
					<p className='mb-2'><i className='fa fa-user-md mr-2'></i> {paciente.nacimiento}</p>
					<p className='mb-2'><i className='fa fa-address-card mr-2'></i> {paciente.edad}</p>
					<p className='mb-2'><i className='fa fa-envelope mr-2'></i> {paciente.genero}</p>
                    <p className='mb-2'><i className='fa fa-phone mr-2'></i> {paciente.grupo_sanguineo}</p>
					<p className='mb-2'><i className='fa fa-phone mr-2'></i> {paciente.direccion}</p>
					<p className='mb-2'><i className='fa fa-globe mr-2'></i> {paciente.telefono}</p>
					<p className='mb-2'><i className='fa fa-map-marker-alt mr-2'></i> {paciente.email}</p>
				</div>
				<a><EditPacInfo medico={props.props.id_pac} /></a>
			</div>
		</div>
	);
};

export default UserCard;