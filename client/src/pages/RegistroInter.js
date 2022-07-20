import NavbarSec from '../components/navbar/Navbarsec.js';
import Footer from '../components/footer/Footer.js';
import '../App.css';
import FormInter from "../components/registro/FormInter.js";

const RegistroInter = _ => {
  return(
    <div>
      <NavbarSec/>
      <FormInter/>
      <Footer/>
    </div>
  );
}

export default RegistroInter 