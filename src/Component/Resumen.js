import React, { Component } from 'react';
import {primeraMayuscula} from '../Helpers'
import Resultado  from "./Resultado";

class Resumen extends Component {
    
    mostrarResumen=()=>{

        const {marca, year, plan} = this.props.datos
        if(!marca || !year || !plan ) 
        return null

        return(
            

            <div>
                <h2>Resumen de Cotizacion</h2>
                <li>Marca: {primeraMayuscula (marca)}</li>
                <li>Año del Auto: {year}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>


            </div>
        )
    }

    render() {


       
        return (
            <div>
                {this.mostrarResumen()}
                <Resultado
                resultado={this.props.resultado}
                />
                
                
            </div>
        );
    }
}

export default Resumen;