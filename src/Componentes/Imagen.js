import React from 'react'

const Imagen = (props) => {

    const {largeImageURL, likes, previewURL, tags, views} = props.imagen;
    return (

                <div className="column is-2">
                    <div className="card">
                        <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={previewURL}/>
                        </figure>
                        </div>
                        <div className="card-content has-background-grey-light">
                            <div className="content">
                            <p>Me gusta : {likes}</p>
                            <a target="_blank" href={largeImageURL} className="button is-primary">Descargar</a>
                            </div>
                        </div>
                    </div>
                </div>

            
    )
}

export default Imagen