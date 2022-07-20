import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const HistoriaClinica = _ => {
  return(
    <div className="row mt-5 pb-5">
      <h3>Historia Clínica</h3>
      <table className="table pt-2">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Motivo Consulta</th>
            <th scope="col">Medicamentos recetados</th>
            <th scope="col">Ver más</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01/05/2022</td>
            <td>Dolor Abdominal</td>
            <td>Duspatalin</td>
            <td><button type="button" className="btn btn-outline-success">Ver más</button></td>
          </tr>
          <tr>
            <td>24/04/2022</td>
            <td>Vómitos</td>
            <td>Kaopectate</td>
            <td><button type="button" className="btn btn-outline-success">Ver más</button></td>
          </tr>
          <tr>
            <td>17/04/2022</td>
            <td>Dolor de cabeza</td>
            <td>Aspirina</td>
            <td><button type="button" className="btn btn-outline-success">Ver más</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );

}


export default HistoriaClinica