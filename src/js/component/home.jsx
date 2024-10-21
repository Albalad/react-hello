import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navar from "./Navar";
import Titulo from "./Titulo";
import Carta from "./Carta";
import Boton from "./Boton";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="cuerpo">
			<header>
				<Navar />
			</header>
			<div className="container">
				<Titulo />
				<div className="row mt-4">

					<Carta fondo="tarjeta"
						titulo="Conoce a Rigo"
						texto="Este es Rigo, la mascota de 4GeeksAcademy y la más querida por todos los que cursan su bootcamp, ¿Quieres conocerlo más a fondo?."
						aligment="text-center"
						col="mb-3 mb-md-0 col-lg-3"
						footer="border-top justify-content-center d-flex pieCarta"
						imagen={rigoImage} width="100%" height="250px"
						boton={<Boton contenido="Find Ot More!" direccion="https://4geeks.com/" />} />

					<Carta fondo="tarjeta"
						titulo="Ración de ternura"
						texto="Siempre se ha dicho que los perros salchicha son los más graciosos y tiernos del mundo perruno, ¿Será eso cierto?."
						aligment="text-center" col="mb-3 mb-md-0 col-lg-3"
						footer="border-top justify-content-center d-flex pieCarta"
						imagen="https://imgs.search.brave.com/WMVlv60Vbs0whBWaNRTts3CruqYMJ6VQHsdBN9ks77c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXVuZG9wZXJyb3Mu/ZXMvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDQvc2FsY2hp/Y2hhX25lZ3JvLmpw/Zw" width="100%" height="250px"
						boton={<Boton contenido="Find Ot More!" direccion="https://www.istockphoto.com/es/fotos/perro-salchicha" />} />

					<Carta fondo="tarjeta"
						titulo="Como lo hace"
						texto="Aunque no lo parezca, esta página está totalmente creada con react, usando sus complementos como base, ¿Quieres hecharle un vistazo?."
						aligment="text-center" col="mb-3 mb-md-0 col-lg-3"
						footer="border-top justify-content-center d-flex pieCarta"
						imagen="https://imgs.search.brave.com/_kaIsmtD0AFH3Vediezyxx_aJPNBjderWHwtBDLjpbk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9raW5z/dGEuY29tL2VzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9zaXRlcy84/LzIwMjIvMDcvcXVl/LWVzLXJlYWN0LWpz/LTEwMjR4NTEyLnBu/Zw" width="100%" height="250px"
						boton={<Boton contenido="Find Ot More!" direccion="https://es.react.dev/" />} />

					<Carta fondo="tarjeta"
						titulo="Le da estilo"
						texto="Todos los estilos que ves en esta página fueron sacados de los predefinidos de bootstrap quien nos da numerosos estilos, ¿Quieres verlo?."
						aligment="text-center" col="mb-3 mb-md-0 col-lg-3"
						footer="border-top justify-content-center d-flex pieCarta"
						imagen="https://imgs.search.brave.com/5vlZSmazPOSRdNZorNMVrnVn-0iIs9Sk7kGz0p7MXUM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yb2Nr/Y29udGVudC5jb20v/ZXMvd3AtY29udGVu/dC91cGxvYWRzL3Np/dGVzLzMvMjAyMC8w/NS9RdSVDMyVBOS1l/cy1Cb290c3RyYXAt/MTAyNHg1NzYuanBn" width="100%" height="250px"
						boton={<Boton contenido="Find Ot More!" direccion="https://getbootstrap.com/" />}
					/>
				</div>
			</div>
			<footer id="footer">
				<Footer />
			</footer>
		</div>
	);
};

export default Home;
