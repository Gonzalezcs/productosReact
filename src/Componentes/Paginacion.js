import React from 'react'

const Paginacion = props => {
    return(
        <React.Fragment>
            <div className="field is-grouped">
                <p className="control">
                    <button onClick={props.paginaAnterior} type="button" className="button is-primary"> Anterior</button>
                </p>
                <p className="control">
                    <button onClick={props.paginaSiguiente} type="button" className="button is-primary"> Siguiente</button>
                </p>
            </div>
        </React.Fragment >
    )
}

export default Paginacion;