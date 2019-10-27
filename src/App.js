import React from 'react';
import 'bulma/css/bulma.css';
import Buscador from './Componentes/Buscador'
import Resultado from './Componentes/Resultado'
class App extends React.Component {
  state ={
    termino : '',
    imagenes : []
  }

  consultarApi = () =>{

    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}&per_page=30`;
    
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes: resultado.hits}))
  }
  datosBusqueda = (termino) => {
    this.setState({
      termino:termino
    }, () =>{
      this.consultarApi();
    })
  }
  render(){
    return(
      <div className="app container is-fluid">
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                 Buscador de Imágenes
              </h1>
              <Buscador
                datosBusqueda={this.datosBusqueda}
              />
            </div>
          </div>
        </section>
        <Resultado
          imagenes={this.state.imagenes}
        />
      </div>
    )
  }
}

export default App;
