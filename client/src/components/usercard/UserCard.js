import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import '../../css/usercard/UserCard.css';
import EditMedicInfo from './EditMedicInfo';


const UserCard = (props) => {
	const [medico, setMedico] = useState([]);

	const getMedico = async () => {
		try {
			const response = await fetch(`http://localhost:5000/medicos/${props.props.id_med}`);
			const jsonData = await response.json();
			setMedico(jsonData);

		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getMedico();
	}, []);


	return (
		<div className='pt-3'>
			<div className='profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden'>
				<div className='banner'></div>
				<img src={require(`../../img/usercard/${props.props.id_med}.jpg`)} alt='Foto de Perfil' className='img-circle mx-auto mb-3' />
				<h3 className='mb-4'>{medico.nombre} {medico.apellido}</h3>
				<div className='text-left mb-4'>
					<p className='mb-2'><i className='fa fa-user-md mr-2'></i> {medico.especialidad}</p>
					<p className='mb-2'><i className='fa fa-address-card mr-2'></i> {medico.cmp}</p>
					<p className='mb-2'><i className='fa fa-envelope mr-2'></i> {medico.email}</p>
					<p className='mb-2'><i className='fa fa-phone mr-2'></i> {medico.telefono}</p>
					<p className='mb-2'><i className='fa fa-globe mr-2'></i> {medico.web}</p>
					<p className='mb-2'><i className='fa fa-map-marker-alt mr-2'></i> {medico.ubicacion}</p>
				</div>
				<a><EditMedicInfo medico={props.props.id_med} /></a>
			</div>

		</div>
	);
};

export default UserCard;