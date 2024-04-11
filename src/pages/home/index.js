import React from "react";
import Toolbar from "../../components/Toolbar";
import Carrousel from "../../components/Carroussel";
import Info from "../../components/Info";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function MainPage() {

	return (
		<div>
			<Toolbar />
			<div><Carrousel /></div>
			<Info />
			<div>{"Nossa equipe"}</div>
			<Contact />
			<Footer />
		</div>
	);
}

export default MainPage;
