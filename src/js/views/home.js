import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Welcome to my CONTACS APP!</h1>
		<Link to="/contactos"><button className="btn btn-secondary mt-5">Take me to contacts</button></Link>
	</div>
);
