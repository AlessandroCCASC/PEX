import React from "react";
import Carrousel from "../../components/Carroussel";
import Toolbar from "../../components/Toolbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function MainPage() {

	return (
		<div>
			<Toolbar />
			<div><Carrousel /></div>
			<div>{"Quem somos"}</div>
			<div>{"Nossa equipe"}</div>
			<Contact />
			<Footer />
		</div>
	);
}

export default MainPage;
