import React from "react";

import Navbar from "./navbar";
import Cartapri from "./cartapri";
import Cartainferiores from "./cartasinferiores";
import Footer from "./footer";

const Home = (props) => {
	const noticias = [
		{ nombre: "Lewis Hamilton ", descripcion: "piloto británico, ¿Es el mejor de todos los tiempos? Pocos negarían que está en la conversación - Ferrari", imagen: "https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/868.png&w=350&h=254", link: "https://www.formula1.com/en/drivers/lewis-hamilton" },
		{ nombre: "Max Verstappen ", descripcion: "piloto de automovilismo neerlandés nacido en Bélgica, Campeon actual de formula 1.......Red Bull Racing", imagen: "https://cdn-8.motorsport.com/images/mgl/6D1XbeV0/s800/max-verstappen-red-bull-racing.jpg", link: "https://www.formula1.com/en/drivers/max-verstappen" },
		{ nombre: "Lando Norris ", descripcion: "piloto de automovilismo británico", imagen: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-2204837384-67ea79e050621.jpg?crop=1.00xw:0.670xh;0,0.0806xh&resize=1200:*", link: "https://www.formula1.com/en/drivers/lando-norris" },
		{ nombre: "F1 ", descripcion: "Sigue los grandes premios en VIVO!", imagen: "https://www.formula1.com/content/dam/fom-website/manual/Trademarks/f1-red-800px.png", link: "https://www.formula1.com/#stories/3f3d8ce4-93a0-39b5-f5f7-3a1d068b3115" },
	]

	return (


		<div>
			<div className="NavbaryCartaPri">
				<Navbar />
				<Cartapri />

				<div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
					{noticias.map((item, index) => (
					<Cartainferiores key={index} nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} link={item.link} />
				))}
				</div>

				<Footer/>
				
			</div>

		</div>

	);
};

export default Home;