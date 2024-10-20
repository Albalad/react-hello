import React from 'react';

const Boton = (props) => {
    return (
        <div>
            <a target="_blank" href={props.direccion} class="btn btn-primary my-2">Find Out More!</a>
        </div>
    )
};

export default Boton;