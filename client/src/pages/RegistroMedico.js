import NavbarSec from '../components/navbar/Navbarsec.js';
import Footer from '../components/footer/Footer.js';
import '../App.css';
import FormMed from '../components/registro/FormMed.js';

const RegistroMedico = _ => {
  return(
    <div>
      <NavbarSec/>
      <FormMed/>
      <Footer/>
    </div>
  );
}

export default RegistroMedico 