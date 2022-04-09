import React from "react";
import NavBar from "./NavBar"
import Card from "./card"
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<div>
			<Jumbotron />
			<NavBar />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default Home;
