import React from 'react'

class Buscador extends React.Component{

    busquedaRef = React.createRef();
    obtenerDatos = (e) => {
       e.preventDefault(); // Previenes que el submit redireccione
       const termino = this.busquedaRef.current.value;//tomamos el valor del input
       this.props.datosBusqueda(termino)//Lo enviamos al componente Principal appjs
    }
    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="columns">
                   
                    <div className="column is-8">
                        <input ref={this.busquedaRef} type="text" className="input is-medium" placeholder="Busca algo. Ej: Futbol" />
                    </div>
                    <div className="column is-4">
                        <input type="submit" className="button is-medium is-fullwidth is-warning" placeholder="Busca algo. Ej: Futbol" />
                    </div>
                </div>
            </form>
        )
    }
}

export default Buscador;