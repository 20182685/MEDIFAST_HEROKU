import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import 'chart.js/auto';
import {Chart} from 'react-chartjs-2';
import React, {useState} from 'react';
import axios from "axios";

const Historico = _ => {
  const [datos, setDatos] = useState({});
  async function getDatos(){
    const res = await axios.get(/*URL MEDICOHISTORICO */);
    const data1 = res.data.content;
    console.log(data1);
    setDatos(data1);
  }
  React.useEffect(() => {
    getDatos();
  },[]);

  const dataD = {
    labels: [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo"
    ],
    datasets: [
      {
        label: "Primer dataset",
        data: datos?.dias,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const dataM = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Setiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ],
    datasets: [
      {
        label: "Primer dataset",
        data: data?.meses,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const [chartState, setChartState] = useState(dataM);
  console.log(chartState)
  return(
    <div>
      <div class='container'>
        <div class='row'>
          <h1>Citas atendidas</h1>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <p>Monto facturado: </p>
          </div>
          <div class="col-4">
            <p>$100</p>
          </div>
        </div>
      </div>

      <div class="container mt-4">
        <div class="row">
          <h2>Gráfico citas:</h2>
        </div>
        <select class='form-select' onChange={(e) => {
          e.preventDefault();
          console.log(e.target.value);
          const selectedTipo = e.target.value;
          if(selectedTipo === "Meses"){
            setChartState(dataM);
          }
          if(selectedTipo === "Días"){
            setChartState(dataD);
          }
        }}>
          <option defaultChecked> Seleccione tipo</option>
          <option value="Meses">Meses</option>
          <option value="Días">Días</option>
        </select>
      </div>
      <div class="container mt-4">
        <div class="row">
          <Chart type="line" data={chartState} />
        </div>
      </div>
    </div>

  );



}




 