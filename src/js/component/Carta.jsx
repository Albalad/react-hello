import React from 'react';



const Carta = (props) => {
    return (
        <div className={`${props.col}`}>
            <div className={`card ${props.fondo} ${props.margen}`}>
            <img src={props.imagen} alt={props.alt} width={props.width} height={props.height}/>
                <div className={`card-body ${props.aligment}`}>
                    <h5 className={`card-title ${props.tamano}`}>{props.titulo}</h5>
                    <p className="card-text">{props.texto}</p>
                </div>
                <footer className={props.footer}>
                    {props.boton}
                </footer>
            </div>
        </div>
    );
};

export default Carta;