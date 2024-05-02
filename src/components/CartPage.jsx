import React, { useState, useEffect } from "react";
import { useCartStore } from '../data/shoppingCart.js'
// import '../index.css';
import '../css/CartPage.css'
import TrashDeleteImg from '../assets/delete.png'
import { NavLink } from "react-router-dom";

const CartPage = () => {
	const items = useCartStore(state => state.items);
	const deleteItem = useCartStore(state => state.deleteProduct);
	const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
	const incrementQuantity = useCartStore(state => state.incrementQuantity);
	const decrementQuantity = useCartStore(state => state.decrementQuantity);
	const [email, setEmail] = useState('')
    const [emailTouched, setEmailTouched] = useState(false);
	const [name, setName] = useState('')
    const [nameTouched, setNameTouched] = useState(false);
	const [lastName, setLastname] = useState('')
    const [lastNameTouched, setLastNameTouched] = useState(false);
	const [adress, setAddress] = useState('')
    const [adressTouched, setAdressTouched] = useState(false);
	const [city, setCity] = useState('')
    const [cityTouched, setCityTouched] = useState(false);
	const [postcode, setPostcode] = useState('')
    const [postcodeTouched, setPostcodeTouched] = useState(false);
	const [inputErrorMessege, setInputErrorMessege] = useState('')

	const emailIsValid = email.length > 0 && email.includes('@');
    const emailErrorMessage = emailIsValid ? '' : 'Please, enter your email.';

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

	
	//css variables
	let emailErrorClass = 'error', emailClass = '';
	if (!emailTouched) {
		emailErrorClass += 'hidden'
	} else {
		emailErrorClass += emailIsValid ? 'hidden' : 'invalid';
		emailClass += emailIsValid ? 'valid' : 'invalid';
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
					<label> Email: <input type="text" /> </label>
					</div>
					<div className="delivery-input">
					<label> Delivery information </label>
					<div className="name-lastname-input">
					<input type="text" placeholder="Name*" /> 
					<input type="text" placeholder="Lastname*" />
					
					</div>
					<input type="text" placeholder="Street address*" /> 
					<input type="text" placeholder="City*" />
					<input type="text" placeholder="Postcode*" />
					</div>
					<p>Total: {totalPrice} kr</p>
					<button className="confirm-order-btn">Confirm order</button>
					</section>
					)}
					
					
					</div>
					);
				}
				
				export default CartPage;
				