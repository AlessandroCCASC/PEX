import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";

export default createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />,
	}
]);
