import React from "react";
import { useCartStore } from '../data/shoppingCart.js'
import '../index.css';



const CartPage = () =>  {
	const items = useCartStore(state => state.items)

	return (
		<div>
			{items.lenght === 0 ? (
				<p>Your cart is empty</p>
			) : (
				items.map(item => (
					<div key={item.key} > 
					<img src={item.imageURL} alt={item.name}></img>
					<div>
					<h3>{item.name}</h3>
					<p>Quantity: {item.quantity}</p>
					<p>Price: { item.price}</p>
					<p>Total: {item.price * item.quantity}</p>
					</div>
					</div>
				))
			)
			}
		</div>
	)
}

export default CartPage