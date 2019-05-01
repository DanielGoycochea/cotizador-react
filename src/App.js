import React, { Component } from 'react';
import Header from './Component/Header'
import Formulario from './Component/Formulario'
import{obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from './Helpers'
import Resumen from './Component/Resumen'
import './App.css';


class App extends Component {
  state = {
    resultado:'',
    datos:''

  }


  cotizarSeguro= (datos)=>{
    const {marca, plan, year}= datos
    //PrecioBase
    let resultado = 2000;

    //Obtener diferencia de año

    const diferencia = obtenerDiferenciaAnio(year)

    //por cada año restar 3%
    resultado -= ((diferencia * 3) * resultado)/100;
    //incremento dependiendo el modelo
    resultado = calcularMarca(marca) * resultado
    //plan increment

      let incrementoPlan =obtenerPlan(plan)

      resultado = parseFloat(incrementoPlan * resultado).toFixed(2)

     //resumen
     const datosAuto ={
       marca:marca,
       year: year,
       plan: plan
     }

      //resultado

      this.setState({
        resultado:resultado,
        datos: datosAuto
      })


  }

  render() {
    return (
      <div className= 'Container'>
        <Header titulo='Cotizador de Auto'/>
        <div>
          <Formulario
          cotizarSeguro={this.cotizarSeguro}
          />
        </div>
        <div>
          <Resumen 
          datos={this.state.datos}
          resultado={this.state.resultado}
          />
        </div>

      </div>
    );
  }
}

export default App;
