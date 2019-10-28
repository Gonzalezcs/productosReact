import React from 'react'
import Imagen from './Imagen'
import Paginacion from './Paginacion'

class Resultado extends React.Component{
    mostrarImagenes = () =>{

        const imagenes = this.props.imagenes
        if(imagenes.length ===0){
            return null;
        }
        return(
           
            <React.Fragment>
                <br/>
                <div className="columns is-multiline">
                    {imagenes.map(imagen =>(
                        <Imagen 
                            key={imagen.id}
                            imagen={imagen}
                            likes={imagen.likes}
                            largeImageURL={imagen.largeImageURL}
                        />
                    ))}
                </div>
                <div className="columns is-mobile is-centered">
                    <div className="column is-3">
                        <Paginacion 
                             paginaAnterior={this.props.paginaAnterior}
                             paginaSiguiente={this.props.paginaSiguiente}
                        />
                    </div>
                </div>
                
            </React.Fragment>

        )
    }
    render(){
        return(
            <React.Fragment>
                 {this.mostrarImagenes()}
            </React.Fragment>
        )
    }
}

export default Resultado;