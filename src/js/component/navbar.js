import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./favorites.js";

import "../../styles/index.css"

const brand_link = "https://www.freepnglogos.com/uploads/star-wars-logo-31.png"

export const Navbar = () => {
	return (
		<nav className="navbar bg-light">
			<div className="container">
				<Link to={"/"} className="navbar-brand">
					<img className="brand-size" src={brand_link} alt="star wars logo" />
				</Link>
				<Favorites />
			</div>
		</nav>
	);
};
