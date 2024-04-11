import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Carousel, IconButton } from "@material-tailwind/react";
import {
	ChevronRightIcon,
	ChevronLeftIcon,
} from "@heroicons/react/24/solid";

function CarouselBaseNavigation({ setActiveIndex, activeIndex, navigationColor, length }) {
	return (
		<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
			{new Array(length).fill("").map((_, i) => (
				<span
					key={i}
					className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
						activeIndex === i ? `bg-${navigationColor}` : `bg-${navigationColor}/50`
					}`}
					onClick={() => setActiveIndex(i)}
				/>
			))}
		</div>
	);
}

function NextArrow({ handleNext, navigationColor }) {
	return (
		<IconButton
			variant="text"
			color={navigationColor}
			size="lg"
			onClick={handleNext}
			className="!absolute top-2/4 !right-4 -translate-y-2/4"
		>
			<ChevronRightIcon className="h-6 w-6" />
		</IconButton>
	);
}

NextArrow.propTypes = {
	handleNext: PropTypes.func,
	navigationColor: PropTypes.string
};

function PrevArrow({ handlePrev, navigationColor  }) {
	return (
		<IconButton
			variant="text"
			color={navigationColor}
			size="lg"
			onClick={handlePrev}
			className="!absolute top-2/4 left-4 -translate-y-2/4"
		>
			<ChevronLeftIcon className="h-6 w-6" />
		</IconButton>
	);
}

PrevArrow.propTypes = {
	handlePrev: PropTypes.func,
	navigationColor: PropTypes.string
};

CarouselBaseNavigation.propTypes = {
	setActiveIndex: PropTypes.func,
	activeIndex: PropTypes.number,
	length: PropTypes.number,
	navigationColor: PropTypes.string
};

function CarouselBase({ children, withoutArrows, navigationColor }) {

	const navigation = useCallback(
		props => <CarouselBaseNavigation {...props} navigationColor={navigationColor} />,
		[navigationColor]
	);

	const nextArrow = useCallback(
		props => withoutArrows ? null : <NextArrow {...props} navigationColor={navigationColor} />,
		[withoutArrows, navigationColor]
	);

	const prevArrow = useCallback(
		props => withoutArrows ? null : <PrevArrow {...props} navigationColor={navigationColor} />,
		[withoutArrows, navigationColor]
	);

	return (
		<Carousel
			className="h-full max-h-96"
			navigation={navigation}
			nextArrow={nextArrow}
			prevArrow={prevArrow}
		>
			{children}
		</Carousel>
	);
}

CarouselBase.propTypes = {
	children: PropTypes.node,
	withoutArrows: PropTypes.bool,
	navigationColor: PropTypes.string
};

export default CarouselBase;