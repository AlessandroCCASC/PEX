import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

function MainPage({ menuItems }) {
	const navigate = useNavigate();

	const navigateToHome = useCallback(
		() => navigate(""),
		[navigate]
	);

	return (
		<div>
			<div>
				<div onClick={navigateToHome}>
					{"Title"}
				</div>
				<nav>
					{
						menuItems.map(item => (
							<NavLink key={item.title} to={item.path}>
								{item.title}
							</NavLink>
						))
					}
				</nav>
			</div>
			<Outlet />
			<div>
				{"Footer"}
			</div>
		</div>
	);
}

MainPage.propTypes = {
	menuItems: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			path: PropTypes.string,
			element: PropTypes.element
		})
	)
};

export default MainPage;
