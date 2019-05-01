import React, { Component } from 'react';


class Resultado extends Component {
    render() {
        const resultado = this.props.resultado
        const mensaje = (!resultado)? 'Elije Marca Año y Tipo de Seguro': `el total es $ ${resultado}`
        return (
            <div>
                {mensaje}
            </div>
        );
    }
}

export default Resultado;