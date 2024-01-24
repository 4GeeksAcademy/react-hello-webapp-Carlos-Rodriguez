import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-white ml-auto">
			<Link to="/"><button className="btn btn-danger">Take me home</button></Link>
			<div className="ml-auto">
				<Link to="/Formulario">
					<button className="btn btn-success">Add a new contact</button>
				</Link>
			</div>
		</nav>
	);
};
