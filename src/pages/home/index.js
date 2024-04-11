import React from "react";
import Toolbar from "../../components/Toolbar";
import Carrousel from "../../components/Carroussel";
import Info from "../../components/Info";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function MainPage() {

	return (
		<div>
			<Toolbar />
			<div><Carrousel /></div>
			<Info />
			<div>{"Nossa equipe"}</div>
			<Contact />
			<Footer />

			{/* todo: ver se é interessante incluir, se sim verificar alinhamento do botao send*/}
			<FloatingWhatsApp
				phoneNumber="47984755297"
				accountName="Taty unhas & beleza"
				avatar="/logo.png"
				statusMessage=""
				chatMessage="Olá! Vamos agendar um horário? 🤗"
				placeholder="Mensagem"
				allowClickAway="true"
				messageDelay="1"
				notificationSound="true"
			/>
		</div>
	);
}

export default MainPage;
