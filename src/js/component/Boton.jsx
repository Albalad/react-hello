import React from 'react';

const Boton = (props) => {
    return (
        <div>
            <a target="_blank" href={props.direccion} class="btn btn-primary">{props.contenido}</a>
        </div>
    )
};

export default Boton;