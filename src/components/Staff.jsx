import React from "react";
import PropTypes from "prop-types";
import Carousel from "./Carousel";
import { Avatar, Typography } from "@material-tailwind/react";

function StaffItem({ image, name, description }) {
	return (
		<div className="flex flex-grow items-center justify-center overflow-hidden  w-full  py-8 px-8">
			<div className='md:flex'>
				<div className="sm:shrink-0 flex flex-grow items-center justify-center">
					<Avatar src={image} size="xxl" className="border-4 border-accent-100" />
				</div>
				<div className="m-5">
					<Typography
						variant="lead"
						color="black"
						className="mb-1 text-gray-900 font-semibold">
						{name}
					</Typography>
					<Typography
						variant="lead"
						color="black"
						className="mb-1 text-gray-700 justify-center">
						{description}
					</Typography>
				</div>
			</div>
		</div>
	);
}

StaffItem.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string
};

function Staff() {
	return (
		<section id="staff">
			<div className="h-full bg-red-50">
				<Typography
					variant="h4"
					className="text-gray-900 text-center pt-8"
				>
					{"Conheça nossa equipe"}
				</Typography>
				<Carousel withoutArrows navigationColor="black">
					<StaffItem
						name="Tatiani Elias"
						description={"Manicure, especialista em alongamento de unha e esmaltação em gel e estou sempre buscando me aperfeiçoar na área para trazer melhor atendimento e fazer você brilhar."}
						image={"/Tati.png"}
					/>
					<StaffItem
						name="Gizelly Schreder"
						description={"Designer de Sobrancelhas. Tomei a decisão de trabalhar com o que realmente me realiza, gosto da ideia de transformar olhares, deixando você ainda mais realizada."}
						image={"/Gizelly.png"}
					/>
				</Carousel>
			</div>
		</section>
	);
}

export default Staff;