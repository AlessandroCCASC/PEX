import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Home from "./pages/home";
import Error from "./pages/error";
import About from "./pages/about";
import Contact from "./pages/contact";
import Team from "./pages/team";

const menuItems = [
	{
		title: "Quem somos ",
		path: "about",
		element: <About />
	},
	{
		title: "Contato",
		path: "contact",
		element: <Contact />
	},
	{
		title: "Equipe",
		path: "team",
		element: <Team />
	}
];

export default createBrowserRouter([
	{
		path: "/",
		element: <Main menuItems={menuItems} />,
		errorElement: <Error />,
		children: [
			{
				path: "",
				element: <Home />
			},
			...menuItems
		]
	}
]);
