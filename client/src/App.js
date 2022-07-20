import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppointmentPage from './pages/AppointmentPage.js';
import ReviewPage from './pages/ReviewPage.js';
import ConsultingPage from './pages/ConsultingPage.js';
import MessagingPage from './pages/MessagingPage.js';
import MedicalSearchPage from './pages/MedicalSearchPage.js';
import AttentionPage from './pages/AttentionPage.js';
import Login from './components/loginPatient/login.js';
import MessagingPatientPage from './pages/MessagingPatientPage.js';
import PerfilFrame from './pages/perfilPage.js';

//import ExamplePage from './ExamplePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/appointments"
          element={<AppointmentPage id_med='0001' />}
        />
        <Route
          path="/reviews"
          element={<ReviewPage id_med='0001' />}
        />
        <Route
          path="/consulting"
          element={<ConsultingPage id_cit='0007' id_med='0001' id_pac='0001' />}
        />
        <Route
          path="/messaging"
          element={<MessagingPage id_med='0001' />}
        />
        <Route 
          path="/MedicalSearch"
          element={<MedicalSearchPage id_pac='0003'  />}
        />
        <Route 
          path="/attention"
          element={<AttentionPage id_cit='0007'/>}
        />
        <Route 
          path="/Login"
          element={<Login />}
        />
        <Route
          path="/mensajepaciente"
          element={<MessagingPatientPage />}
        />
        <Route
          path="/perfilmedico"
          element={<PerfilFrame id_med='0001'/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;