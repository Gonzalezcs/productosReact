import React from 'react';
import 'bulma/css/bulma.css';
import Buscador from './Componentes/Buscador'
import Resultado from './Componentes/Resultado'
import {Spring} from 'react-spring/renderprops'


class App extends React.Component {
  state ={
    termino : '',
    imagenes : [],
    pagina:''
  }
  paginaAnterior = () => {
    console.log('Pagina Anterior boton ok');
    let pagina = this.state.pagina;
    if(pagina ===1) return null;
    pagina -=1;
    this.setState({
      pagina:pagina
    },() => {
      this.consultarApi();
      this.scroll();
    })
  }

  scroll= () =>{
    const elemento = document.querySelector('.app');
    elemento.scrollIntoView('smooth','start');
  }
  paginaSiguiente = () => {
    console.log('Pagina Siguiente boton ok');
    let pagina = this.state.pagina;
    pagina +=1;
    this.setState({
      pagina:pagina
    },() => {
      this.consultarApi();
      this.scroll();
    });
  }


  consultarApi = () =>{
    const pagina = this.state.pagina;
    console.log(pagina);
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}&per_page=20&page=${pagina}`;
    
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes: resultado.hits}))
  }
  datosBusqueda = (termino) => {
    this.setState({
      termino:termino,
      pagina: 1
    }, () =>{
      this.consultarApi();
    })
  }
  render(){
    return(
      <div className="app container is-fluid">
        <section className="hero is-link">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                  Buscador
              </h1>
              <Buscador
                datosBusqueda={this.datosBusqueda}
              />
            </div>
          </div>
        </section>
    
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        
      </div>
    )
  }
}

export default App;
