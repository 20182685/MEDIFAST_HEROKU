import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';

const FormMed = _ => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [reg, setReg] = useState({
    nombre: "",
    apellido: "",
    cmp: "",
    especialidad: 0,
    email: "",
    contrasena: "",
    telefono: "",
    ubicacion: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setReg((prevFormData) => {
      return{
        ...prevFormData,
        [name]: name==="especialidad"? parseInt(value):value,
      };
    });
  }
/*
  async function handleSubmit(event){
    event.preventDefault();
    console.log(reg);
    try{
      await axios.post(---------HEROKU REGISTRO--------).then(respuesta =>{
        console.log(respuesta);
        navigate("/");
      })
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    axios.get(-------ESPECIALIDADES-------).then(res=>{
      const data = res.data.content;
      setList(data);
    })
  },[])
*/
  return(
    <div className='container'>
      <div className='row mb-3 mt-4 col-sm-6 mx-auto'>
          <h1>Registro de médico especialista</h1>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <div className='form-floating'>
            <form /*onSubmit={handleSubmit}*/ action="">
              <FormInput
                onChange={handleChange} name="nombre"
                type="text" label="Nombre"
              />
              <FormInput
                onChange={handleChange} name="apellido"
                type="text" label="Apellido"
              />
              <FormInput
                onChange={handleChange} name="cmp"
                type="number" label="CMP"
              />
              <FormInput
                onChange={handleChange} name="especialidad"
                type="text" label="Nombre"
              />
              <FormInput
                onChange={handleChange} name="email"
                type="text" label="Email"
              />
              <FormInput
                onChange={handleChange} name="contrasena"
                type="password" label="Contraseña"
              />
              <FormInput
                onChange={handleChange} name="telefono"
                type="number" label="Teléfono"
              />
              <FormInput
                onChange={handleChange} name="ubicacion"
                type="text" label="Ubicación"
              />
              <div className='form-floating'>
                <select name='especialidad' className='form-select' onChange={handleChange}>
                  <option defaultValue={0}>Seleccione una especialidad</option>
                  {list.map(item=>(<option key={item.id} value={item.id}>{item.name}</option>))}
                </select>
              </div>
              <div>
                <button type='submit' class="boton mt-5 mb-5 col-12 btn btn-success fw-bold">
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

export default FormMed;