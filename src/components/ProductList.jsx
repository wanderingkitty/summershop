import React, { useState, useEffect } from 'react';
import { db } from '../data/firebase.js';
import { collection, getDocs } from 'firebase/firestore/lite';
import '../routes/HomePage.css';
import { useCartStore } from '../data/shoppingCart.js';


async function getData () {
	const productCollection = collection(db, 'products')
	const querySnapshot = await getDocs(productCollection)
	return querySnapshot 
}

// async function getData() {
//     const productCollection = collection(db, 'products');
//     try {
//         const querySnapshot = await getDocs(productCollection);
//         console.log("Fetched products:", querySnapshot.docs.map(doc => doc.data()));  // Log fetched data
//         return querySnapshot;
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         return null;
//     }
// }


// Davids magic function that he will probably explain in the future or something
function withKey(doc) {
    let o = doc.data();
    o.key = doc.id;  // "id" is the document reference
    return o;
}

const ProductList = () => {
    const [products, setProducts] = useState([])
	const addItem = useCartStore((state) => state.addItem)
    
    useEffect(() => {
        const fetchProducts = async () => {
            const docs = await getData();
            const products = docs.docs.map(doc => withKey(doc))
            setProducts(products)
            console.log(products)
        };
        
        fetchProducts()
        
    }
    , [])
    
	return (
		<section className="products-main-section">
				<h2>Products</h2>
				<div className='sort-btn-container'>
					<button className='sort-by-btn'>Sort by name</button>
					<button className='sort-by-btn'>Sort by price</button>
				</div>
			<div className='products-section'>
				{products.map(product => (
					<div className='product-container' key={product.key}>
						<div>
							<img className='product-box' src={product.imageURL} alt={product.name}/>
						</div>
						<div className='name-price-container'>
							<div>{product.name}</div>
							<div>{product.price}</div>
						</div>
						<div className="add-view-btn">
							<button className='view-btn'>View</button>
							<button className='add-btn'>Add</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
	
};
export default ProductList;
