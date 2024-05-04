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
	const [address, setAddress] = useState('')
	const [addressError, setAddressError] = useState('')
	const [city, setCity] = useState('')
	const [cityError, setCityError] = useState('')
	const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

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
			console.log('Email validation failed');
			return false;
		} 
		setEmailError('');
		return true;
	};
	
	const validateName = () => {
		if (name.length === 0) {
			setNameError('Please enter your firtsname.');
			console.log('Name validation failed');
			return false;
		} 
		setNameError('');
		return true;
	};
	
	const validateAddress = () => {
		if (address.length === 0) {
			setAddressError('Please fill in your address.');
			console.log('Address validation failed');
			return false;
		}
		setAddressError('');
		return true;
	};
	
	const validateCity = () => {
		if (city.length === 0) {
			setCityError('Please fill in your city.');
			console.log('City validation failed');
			return false;
		}
		setCityError('');
		return true;
	};
	
	const handleShopSubmit = (event) => {
		event.preventDefault()
		const isNameValid = validateName()
		const isEmailValid = validateEmail()
		const isAddressValid = validateAddress()
		const isCityValid = validateCity()
		
		if (isNameValid && isEmailValid && isAddressValid && isCityValid) {
			setPurchaseConfirmed(true);
			useCartStore.getState().clearCart();
			console.log('thank you, your purchase is being proceed');
		} else {
			console.log('please correct errors');
		}
	}

	if (purchaseConfirmed) {
        return (
            <div className="cart-page-container">
                <h2>Thank you for your purchase, your order has been confirmed!</h2>
            </div>
        );
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
					
					</div>
					<input type="text" placeholder="Street address*"
					value={address}
					onChange={e => setAddress(e.target.value)}
					/> 
					{addressError && <p className="error">{addressError}</p>}
					<input type="text" placeholder="City*"
					value={city}
					onChange={e => setCity(e.target.value)}
					/>
					{cityError && <p className="error">{cityError}</p>}
			
				</div>
				<p>Total: {totalPrice} kr</p>
				<button className="confirm-order-btn"   onClick={handleShopSubmit}>Confirm order </button>
				</section>
				)}
				
				
				</div>
				);
			}
			
			export default CartPage;
			