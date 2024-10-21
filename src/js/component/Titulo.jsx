import React from 'react';
import Carta from './Carta';
import Boton from './Boton';



const Titulo = () => {
	return (
		<div className="">
			<Carta 
			boton2={<Boton contenido="Call to action!" direccion="#" />}
			width="0px" height="0px" tamano="h1" 
			fondo="cartaGris" margen="mt-3" 
			titulo="A Warm Wellcome!" 
			texto="Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur, laoreet risus lacus enim quam senectus eget, ullamcorper diam pulvinar in conubia mus sem. Magna eleifend etiam maecenas dictumst scelerisque nibh ridiculus tortor eget ligula nascetur, viverra sem ornare senectus felis mi facilisi mollis proin id, velit ullamcorper tincidunt accumsan litora netus fames penatibus phasellus auctor." />
		</div>
	);
};

export default Titulo;