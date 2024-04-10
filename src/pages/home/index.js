import React from "react";
import Carrousel from "../../components/Carroussel";
import Toolbar from "../../components/Toolbar";

function MainPage() {

	return (
		<div>
			<Toolbar />
			<div><Carrousel /></div>
			<div>{"Quem somos"}</div>
			<div>{"Nossa equipe"}</div>
			<div>{"Contato equipe"}</div>
		</div>
	);
}

export default MainPage;
