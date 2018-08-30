import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

const routes = [
	{
		path: "/",
		exact: true,
		main: () => <Home />
	},
	{
		path: "/about",
		exact: false,
		main: () => <About />
	},
	{
		path: "/contact",
		exact: false,
		main: () => <Contact  />
    },
    {
		path: "/product",
		exact: false,
		main: ({match}) => <Products match= {match}/>
	},
	{
		path: "",
		exact: false,
		main: () => <NotFound />
	}
];
export default routes;
