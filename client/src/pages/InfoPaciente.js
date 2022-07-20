import NavbarSec from '../components/navbar/Navbarsec.js';
import DatosPersonales from '../components/infopac/DatosPersonales.js';
import Footer from '../components/footer/Footer.js';
import Paciente from '../components/infopac/Paciente.js';
import '../App.css';
import HistoriaClinica from '../components/infopac/HistoriaClinica.js';
import Botones from '../components/infopac/Botones.js';

function InfoPaciente(){
  return(
    <div className="App">
      <NavbarSec/>
      <div className='container'>
        <div className='row'>
          <div className='col-5'>
            <Paciente/>
          </div>
          <div className='col-5 mt-5 ms-5'>
            <DatosPersonales />
          </div>
        </div>
        <HistoriaClinica/>
        <Botones/>
      </div>
      
      <Footer />
    </div>
  );
}

export default InfoPaciente