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
			<Navar/>
			<div className="container">
			<Titulo/>
			<div className="row">
				<Carta col="col-3"/>
			</div>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			</div>
		</div>
	);
};

export default Home;
