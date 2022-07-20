import NavBar from "../components/navbar/NavBar.js"
import NavbarSec from '../components/navbar/Navbarsec.js';
import Footer from '../components/footer/Footer.js';
import '../App.css';


function Landing() {
  return (
    <div className="App">
      <NavBar/>
      <Footer />
    </div>
  );
}

export default Landing;