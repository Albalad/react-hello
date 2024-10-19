import React from 'react';



const Carta = (props) => {
    return (
        <div>
            <div className={`card ${props.fondo} ${props.margen}`}>
                <div className="card-body">
                    <h5 className={`card-title ${props.tamano}`}>{props.titulo}</h5>
                    <p className="card-text">{props.texto}</p>
                </div>
            </div>
        </div>
    );
};

export default Carta;