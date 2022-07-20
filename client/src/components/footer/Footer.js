import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer-dark">
        <div className="container" height="70%">
          <div className="row">
            <div className="col-sm item">
              <h3>Servicios</h3>
              <ul>
                <li><a>Reglas</a></li>
                <li><a>Términos</a></li>
                <li><a>Nosotros</a></li>
              </ul>
            </div>
            <div className="col-sm-6 item text">
              <h3>MedicFast</h3>
              <p>Esta página web fue hecha por estudiantes de Ingeniería de Sistemas de la Universidad de Lima en el ciclo
                2022-1</p>
            </div>
          </div>
          <p className="copyright">MedicFast © 2022</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer