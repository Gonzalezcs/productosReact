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
                        <div className="card-content has-background-info">
                            <div className="content">
                            <p className="has-text-white has-text-weigth-bold">Me gusta : {likes}</p>
                            <a target="_blank" href={largeImageURL} className="button is-warning has-text-black">Descargar</a>
                            </div>
                        </div>
                    </div>
                </div>

            
    )
}

export default Imagen