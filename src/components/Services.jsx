import React from "react";
import PropTypes from "prop-types";
import Carousel from "./Carousel";
import { Typography } from "@material-tailwind/react";

function ServicesItem({ image, text }) {
	return (
		<div className="relative h-full w-full">
			<img
				src={image}
				className="max-h-96 w-full object-cover"
			/>
			<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
				<div className="w-3/4 text-center md:w-2/4">
					<Typography
						variant="lead"
						color="white"
						className="mb-12 opacity-80"
					>
						{text}
					</Typography>
				</div>
			</div>
		</div>
	);
}

ServicesItem.propTypes = {
	image: PropTypes.string,
	text: PropTypes.string
};

function Services() {
	return (
		<Carousel navigationColor="white">
			<ServicesItem
				image={"/servico1.png"}
				text={"Para você que deseja realizar seu alongamento de unhas e conquistar unhas perfeitas, você está lugar certo! Nosso salão está pronto para lhe proporcionar as tão sonhadas unhas em fibra."}
			/>
			<ServicesItem
				image={"/servico2.png"}
				text={"Descubra a verdadeira essência da beleza para suas mãos e pés no nosso salão de beleza! Apresentamos a você os serviços de manicure e pedicure que irão transformar suas unhas em verdadeiras obras de arte."}
			/>
			<ServicesItem
				image={"/servico3.png"}
				text={"Em nosso espaço você tambem encontra o serviço de Desing de sombrancelhas. Tenha a sobrancelha que sempre sonhou! Deixe suas sobrancelhas em harmonia com seu rosto."}
			/>
		</Carousel>
	);
}

export default Services;