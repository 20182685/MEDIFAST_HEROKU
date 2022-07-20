import NavbarSec from '../components/navbar/Navbarsec.js';
import Footer from '../components/footer/Footer.js';
import '../App.css';
import FormPac from '../components/registro/FormPac.js';

const RegistroPaciente = _ => {
  return(
    <div>
      <NavbarSec/>
      <FormPac/>
      <Footer/>
    </div>
  );
}

export default RegistroPaciente 