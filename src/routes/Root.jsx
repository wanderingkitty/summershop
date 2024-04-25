import React from 'react';
import { NavLink } from "react-router-dom";
import HomePage from './HomePage'; 
import Logo from '../assets/LOGO.svg';
import Login from '../assets/login.png';
// import SearchField from './SearchField'; 



const Root = () => {
	return (
		<>
		<div className="app">
		<div className="logo-container">
		<h1>Summer Shop</h1>
		<NavLink to="/"> <img className="logo-header" src={Logo} alt="" /> </NavLink>
		{/* <SearchField/> */}
		</div>
		
		<header>
		<div className="header-row">
		<NavLink to="/Home" className="header-links"> Home </NavLink>
		<NavLink to="/Shop" className="header-links"> Shop </NavLink>
		</div>
		</header>
		<HomePage /> {/* Render the HomePage component here */}
		<div className='background-image'></div>
		<footer>
		<NavLink to="/"> <img className="logo-footer" src={Login} alt="" /> </NavLink>
		</footer>
		</div>
		</>
		);
	};
	
	export default Root;
	