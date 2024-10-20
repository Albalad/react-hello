import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navar from "./Navar";
import Titulo from "./Titulo";
import Carta from "./Carta";

//create your first component
const Home = () => {
	return (
		<div>
			<Navar />
			<div className="container">
				<Titulo />
				<div className="row mt-4">

					<Carta fondo="tarjeta" 
					titulo="Conoce a Rigo" 
					texto="Este es Rigo, la mascota de 4GeeksAcademy y la más querida por todos los que cursan su bootcamp." 
					aligment="text-center" 
					col="mb-3 mb-md-0 col-md-3" 
					footer="border-top justify-content-center d-flex pieCarta" 
					imagen={rigoImage} width="100%" height="250px"
					/>

					<Carta fondo="tarjeta" 
					titulo="Hola" 
					texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum quis metus at ultrices." 
					aligment="text-center" col="mb-3 mb-md-0 col-md-3" 
					footer="border-top justify-content-center d-flex pieCarta" 
					imagen={rigoImage} width="100%" height="250px"
					/>

					<Carta fondo="tarjeta" 
					titulo="Hola" 
					texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum quis metus at ultrices." 
					aligment="text-center" col="mb-3 mb-md-0 col-md-3" 
					footer="border-top justify-content-center d-flex pieCarta" 
					imagen={rigoImage} width="100%" height="250px"
					/>

					<Carta fondo="tarjeta" 
					titulo="Hola" 
					texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum quis metus at ultrices." 
					aligment="text-center" col="mb-3 mb-md-0 col-md-3" 
					footer="border-top justify-content-center d-flex pieCarta" 
					imagen={rigoImage} width="100%" height="250px"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
