// import React from 'react';
// import { NavLink, Outlet } from "react-router-dom";
// import HomePage from '../routes/HomePage'; 
// import Logo from '../assets/LOGO.svg';
// import Login from '../assets/login.png';
// import Cart from '../assets/shopping-cart.png'

// const Root = () => {
	
// 	return (
		
// 		<div className="app">

// 		<div className="logo-container">
// 		<h1>Summer Shop</h1>
// 		<NavLink to="/"> <img className="logo-header" src={Logo} alt="" /> </NavLink>
// 		<NavLink to="/cart"> <img className="shopping-cart-header" src={Cart} alt="" /> </NavLink>

// 		</div>
		
// 		<header>
// 		<div className="header-row">
// 		<NavLink to="/" className="header-links"> Home </NavLink>
// 		<NavLink to="/shop" className="header-links"> Shop </NavLink>
// 		</div>
// 		</header>
// 		{/* <HomePage/>	 */}
// 		<main>
// 			<Outlet />
// 		</main>

// 		<footer>
// 		<NavLink to='/login'> <img className="logo-footer" src={Login} alt="" /> </NavLink>
// 		</footer>
// 		</div>
		
// 		);
// 	};
	
// 	export default Root;


import { Link, NavLink, Outlet } from "react-router-dom"
import React, { useEffect } from 'react';
import '../index.css'
import Logo from '../assets/LOGO.svg';
import Cart from '../assets/shopping-cart-white.png'
import Login from '../assets/login.png';
import Footer from "../components/Footer";
import CartPage from "../components/CartPage";


const Root = () => {
    // useEffect(() => {
    //     handleLoad(); // Ladda menyobjekt från API
    //   }, []); // körs när komponenten skapas


	return (
	<div className="app">

<div className="logo-container">
	<h1>Summer Shop</h1>
	<NavLink to="/Home"> <img className="logo-header" src={Logo} alt="" /> </NavLink>

		</div>
		<header>

		<div className="header-row">
		    <NavLink to="/Home" className="header-links">Home</NavLink>
		<NavLink to="/cart"> <img className="shopping-cart-header" src={Cart} alt="" /> </NavLink>
            </div>
		</header>

		<main>
			<Outlet />
		</main>
				
		<footer>
		<NavLink to='/login'> <img className="logo-footer" src={Login} alt="Link to login image" /> 
		</NavLink>
		<Footer/>
		</footer>

	</div>
	);
}


export default Root
