import React from "react";
import PropTypes from "prop-types";
import Carousel from "./Carousel";
import { Avatar, Typography } from "@material-tailwind/react";

function StaffItem({ image, name, description }) {
	return (
		<div className="relative h-full w-full flex items-center justify-center py-16 px-8">
			<Avatar src={image} size="xxl" />
			<div className="ml-5">
				<Typography
					variant="lead"
					color="black"
					className="mb-1 text-gray-700"
				>
					{name}
				</Typography>
				<Typography
					variant="lead"
					color="black"
					className="mb-1 text-gray-700"
				>
					{description}
				</Typography>
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
		<div className="h-full max-h-96">
			<Typography
				variant="h4"
				className="text-gray-900 text-center mt-5"
			>
				{"Conheça nossa equipe"}
			</Typography>
			<Carousel withoutArrows navigationColor="black">
				<StaffItem
					name="Nome Sobrenome"
					description={"Descritivo das funções, quanto tempo na profissão etc"}
					image={"/logo192.png"}
				/>
				<StaffItem
					name="Nome Sobrenome"
					description={"Descritivo das funções, quanto tempo na profissão etc"}
					image={"/logo192.png"}
				/>
			</Carousel>
		</div>
	);
}

export default Staff;