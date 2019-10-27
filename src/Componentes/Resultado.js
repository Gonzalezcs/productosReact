import React from 'react'
import Imagen from './Imagen'
class Resultado extends React.Component{
    mostrarImagenes = () =>{

        const imagenes = this.props.imagenes
        var a =1;
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