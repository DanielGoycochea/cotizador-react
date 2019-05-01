import React, { Component } from 'react';
import {primeraMayuscula} from '../Helpers'
import Resultado  from "./Resultado";
import {MDBListGroup, MDBListGroupItem} from 'mdbreact'

class Resumen extends Component {
    
    mostrarResumen=()=>{

        const {marca, year, plan} = this.props.datos
        if(!marca || !year || !plan ) 
        return null

        return(
            

            <MDBListGroup style={{ width: "22rem" }}>
                <h2>Resumen de Cotizacion</h2>
                <MDBListGroupItem>Marca: {primeraMayuscula (marca)}</MDBListGroupItem>
                <MDBListGroupItem>Año del Auto: {year}</MDBListGroupItem>
                <MDBListGroupItem>Plan: {primeraMayuscula(plan)}</MDBListGroupItem>


            </MDBListGroup>
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