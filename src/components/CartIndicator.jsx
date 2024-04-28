import React from 'react';
import { useCartStore } from '../data/shoppingCart.js'; 
import '../index.css'

const CartIndicator = () => {
    const items = useCartStore(state => state.items);
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cart-indicator">
            <span>{totalItems}</span>
        </div>
    );
};

export default CartIndicator;
