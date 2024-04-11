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
				image={"/logo192.png"}
				text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis sem eu metus lobortis egestas. "}
			/>
			<ServicesItem
				image={"/logo192.png"}
				text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis sem eu metus lobortis egestas. "}
			/>
			<ServicesItem
				image={"/logo192.png"}
				text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis sem eu metus lobortis egestas. "}
			/>
		</Carousel>
	);
}

export default Services;