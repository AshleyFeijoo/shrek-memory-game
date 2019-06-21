//sets up the reusable Jumbotron component
import React from "react";
import "./header.css";

const Header = () => (
	<header className = "header row p-5 mt-5">
		<div class="col-md-12 mx-auto text-center">
		{/* <img src={ require('../../images/shrekHeader.png') } alt="shrek-pic" border="0"/> */}
		</div>
		{/* <h1>Shrek Memory Game</h1> */}
		<div class="col-md-12 mx-auto text-center">
		<img src={ require('../../images/desc.png') } alt="shrek-pic" border="0"/>
		{/* <h2>Click on an image to gain a point. For every image you click on that you have not previously clicked your score will go up. If you click on the same image twice, you will lose.</h2> */}
		</div>
		</header>

);
export default Header;
