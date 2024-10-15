import React from "react";
import Navbar from "./NavBar";
import Header from "./Header";
import Card from "./card"
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Header />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;
