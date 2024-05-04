import React, { useState, useEffect } from "react";
import { useCartStore } from '../data/shoppingCart.js'
// import '../index.css';
import '../css/CartPage.css'
import TrashDeleteImg from '../assets/delete.png'

const CartPage = () => {
	const items = useCartStore(state => state.items);
	const deleteItem = useCartStore(state => state.deleteProduct);
	const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
	const incrementQuantity = useCartStore(state => state.incrementQuantity);
	const decrementQuantity = useCartStore(state => state.decrementQuantity);
	const [email, setEmail] = useState('')
	const [ emailError, setEmailError] = useState('')
	const [name, setName] = useState('')
	const [nameError, setNameError] = useState('')
	const [lastName, setLastname] = useState('')
	const [lastNameError, setLastNameError] = useState('')
	const [adress, setAddress] = useState('')
	const [adressError, setAdressError] = useState('')
	const [city, setCity] = useState('')
	const [cityError, setCityError] = useState('')
	const [postcode, setPostcode] = useState('')
	const [postcodeError, setPostcodeError] = useState('')
	const [inputErrorMessege, setInputErrorMessege] = useState('')
	
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, []);
	
	const validateEmail = () => {
		if (email.length === 0) {
			setEmailError('Please fill in your email.');
			return false;
		} 
		setEmailError('');
		return true;
	};
	
	const validateName = () => {
		if (name.length === 0) {
			setNameError('Please enter your firtsname.');
			return false;
		} 
		setNameError('');
		return true;
	};
	
	const validateLastName = () => {
		if (lastName.length === 0) {
			setLastNameError('Please enter your last name.');
			return false;
		}
		setLastNameError('');
		return true;
	};
	
	const validateAdress = () => {
		if (adress.length === 0) {
			setAdressError('Please fill in your address.');
			return false;
		}
		setAdressError('');
		return true;
	};
	
	const validateCity = () => {
		if (city.length === 0) {
			setCityError('Please fill in your city.');
			return false;
		}
		setCityError('');
		return true;
	};
	
	const validatePostcode = () => {
		if (postcode.length === 0) {
			setPostcodeError('Please fill in your postcode.');
			return false;
		}
		setPostcodeError('');
		return true;
	};
	
	
	const handleShopSubmit = (event) => {
		event.preventDefault()
		const isNameValid = validateName()
		const isLastNameValid = validateLastName()
		const isEmailValid = validateEmail()
		const isAdressValid = validateAdress()
		const isCityValid = validateCity()
		const isPostcodeValid = validatePostcode()
		
		if (isNameValid && isLastNameValid && isEmailValid && isAdressValid && isPostcodeValid && isCityValid) {
			console.log('thank you, your purchase is being proceed');
		} else {
			console.log('please correct errors');
		}
	}
	
	return (
		<div className="cart-page-container">
		<div className="cart-items-container">
		
		<hr />
		
		{items.length === 0 ? (
			<h2>Your cart is empty</h2>
			) : (
				items.map(item => (
					<div  key={item.key}>
					<div className="cart-product-container">
					<img className="product-img" src={item.imageURL} alt={item.name}></img>
					<h3>{item.name}</h3>
					<p>Price: {item.price + ' kr'}</p>
					<p>Total: {item.price * item.quantity + ' kr'}</p>
					<div className="quantity-controls">
					
					<button onClick={() => decrementQuantity(item.key)}>-</button>
					<span>{item.quantity}</span>
					
					<button onClick={() => incrementQuantity(item.key)}>+</button>
					
					</div>
					<div className="delete-btn">
					<button className="delete-from-cart-btn" onClick={() => deleteItem(item.key)}>
					<img src={TrashDeleteImg} alt="Delete icon" />
					</button>
					</div>
					
					</div>
					
					
					<hr />
					
					</div>
					))
					
					)}
					</div>
					
					{items.length > 0 && (
						
						<section className="input-order">
						<h1>Checkout</h1>
						<div className="input-cart">
						<label>Email: 
						<input type="text" value={email} onChange={e => setEmail(e.target.value)} />
						{emailError && <p className="error">{emailError}</p>}
						</label>
						</div>
						<div className="delivery-input">
						<label> Delivery information </label>
						<div className="name-lastname-input">
						<input type="text" placeholder="Name*"
						value={name}
						onChange={e => setName(e.target.value)}
						 /> 
						 {nameError && <p className="error">{nameError}</p>}
						<input type="text" placeholder="Lastname*"
						value={lastName}
						onChange={e => setLastname(e.target.value)}
						 />
						
						</div>
						<input type="text" placeholder="Street address*"
						value={adress}
						onChange={e => setAddress(e.target.value)}
						 /> 
						<input type="text" placeholder="City*"
						value={city}
						onChange={e => setCity(e.target.value)} />
						<input type="text" placeholder="Postcode*" />
						</div>
						<p>Total: {totalPrice} kr</p>
						<button className="confirm-order-btn"   onClick={handleShopSubmit}>Confirm order </button>
						</section>
						)}
						
						
						</div>
						);
					}
					
					export default CartPage;
					