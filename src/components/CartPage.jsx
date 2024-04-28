import React from "react";
import { useCartStore } from '../data/shoppingCart.js'
// import '../index.css';
import './CartPage.css'
import TrashDeleteImg from '../assets/delete.png'

const CartPage = () => {
    const items = useCartStore(state => state.items);
	const deleteItem = useCartStore(state => state.deleteProduct);
	const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);


    return (
        <div className="cart-page-container">
            <div className="cart-items-container">
                {items.length === 0 ? (
                    <h2>Your cart is empty</h2>
                ) : (
                    items.map(item => (
                        <div className="cart-container" key={item.key}>
                            <img className="product-img" src={item.imageURL} alt={item.name}></img>
                            <div className="cart-product-container">
                                <h3>{item.name}</h3>
                                <p>Price: {item.price}</p>
                                <p>Total: {item.price * item.quantity}</p>
								<button className="delete-from-cart-btn" onClick={() => deleteItem(item.key)}>
									<img src={TrashDeleteImg} alt="Delete icon" />
								</button>
                            </div>
							<div>
                                <p>Quantity: {item.quantity}</p>
							</div>
							<hr />
                        </div>
                    ))
					
                )}
            </div>
            <section className="input-order">
                <h1>Checkout</h1>
                <div className="input-cart">
                    <label> Email: <input type="text" /> </label>
                </div>
                <div className="delivery-input">
                    <label> Delivery information </label>
						<div className="name-lastname-input">
						<input type="text" placeholder="Name" /> 
                    <input type="text" placeholder="Lastname" />

						</div>
                    <input type="text" placeholder="Street address" /> 
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Postcode" />
                </div>
				<p>Total: {totalPrice}</p>  {/* Display the calculated total price */}
                <button className="confirm-order-btn">Confirm order</button>
            </section>
        </div>
    );
}

export default CartPage;
