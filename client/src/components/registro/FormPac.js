import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';

const FormPac = _ => {
  const navigate = useNavigate();
  const [reg, setReg] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contrasena: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setReg((prevFormData) => {
      return{
        ...prevFormData
      };
    });
  }
  /*
  async function handleSubmit(event){
    event.preventDefault();
    console.log(reg);
    try{
      await axios.post(-----HEROKU REGISTRO-----).then(respuesta =>{
        console.log(respuesta);
        navigate("/");
      })
    }catch(error){
      console.log(error);
    }
  }
  */

  return(
    <div className='container'>
      <div className='row col-sm-6 mx-auto mt-4 mb-5'>
        <h1>Registro de médico especialista</h1>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <div className='form-floating'>
            <form /*onSubmit={handleSubmit} */action="">
              <FormInput
                onChange={handleChange} name="nombre"
                type="text" label="Nombre"
              />
              <FormInput
                onChange={handleChange} name="apellido"
                type="text" label="Apellido"
              />
              <FormInput
                onChange={handleChange} name="email"
                type="text" label="Email"
              />
              <FormInput
                onChange={handleChange} name="contrasena"
                type="password" label="Contraseña"
              />
              <div className='row'>
                <button type='submit' class="boton mt-5 mb-5 btn btn-success fw-bold">
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPac;