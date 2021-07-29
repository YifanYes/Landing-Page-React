import React from "react";
import CardSelection from "./cardSelection.jsx";
import ControlledCarousel from "./carousel.jsx";
import Footermagic from "./footermagic.jsx";
import Navart from "./navart.jsx";

const Home = () => {
	return (
		<div className="container-fluid text-center mt-5">
			<Navart />
			<ControlledCarousel />
			<CardSelection />
			<Footermagic />
		</div>
	);
};

export default Home;
