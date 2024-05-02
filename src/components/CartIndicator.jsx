import React from 'react';
import { useCartStore } from '../data/shoppingCart.js'; 
import '../css/index.css'

const CartIndicator = () => {
    const items = useCartStore(state => state.items);
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
	const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
		<>
        <div className="cart-indicator">
            <span>{totalItems}</span>
		<div className='total-price-text'>
			<p>{totalPrice} kr</p>
		</div>
        </div>
		</>
    );
};

export default CartIndicator;
