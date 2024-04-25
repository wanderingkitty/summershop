import React, { useState, useEffect } from 'react';
import { db } from '../data/firebase.js';
import { collection, getDocs } from 'firebase/firestore/lite';


async function getData () {
	const productCollection = collection(db, 'products')
	const querySnapshot = await getDocs(productCollection)
	return querySnapshot 
}

// Davids magic function that he will probably explain in the future or something
function withKey(doc) {
    let o = doc.data();
    o.key = doc.id;  // "id" is the document reference
    return o;
}

const ProductList = () => {
    const [products, setProducts] = useState([])
    
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
    <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.key}>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <div>
                            <img src={product.imageURL}/></div>

                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProductList;
