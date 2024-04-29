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
    const [originalProducts, setOriginalProducts] = useState([]);

const [showDropdown, setShowdropdown] = useState(false)
//Function for swithcing dropdown
const toggleDropdown =  () => setShowdropdown(prev => !prev)

    useEffect(() => {
        const fetchProducts = async () => {
            const docs = await getData();
            const products = docs.docs.map(doc => withKey(doc))
			const fetchedProducts = docs.docs.map(doc => withKey(doc));
            setProducts(products)
			setOriginalProducts(fetchedProducts);
            console.log(products)
			console.log(fetchedProducts);
        };
        
        fetchProducts()
        
    }
    , [])

	//Фунция для обработки добавления товара в корзину
	const handleAddToCart = (product) => {
			addItem({
				key: product.key,
				name: product.name, 
				price: product.price,
				imageURL: product.imageURL
			})
			console.log('added to cart', product.name);
	}

 
	// function for sorting items by price
    const handleSortByPrice = () => {
		const sortedProducts = [...products].sort((a, b) => a.price - b.price);
		setProducts(sortedProducts);
	};

	const handleSortByHighPrice = () => {
		const sortedProducts = [...products].sort((a, b) => b.price - a.price);
		setProducts(sortedProducts);
	};
	

	//function for sorting items by name
	const handleSortByName = () => {
		const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
		setProducts(sortedProducts);
	}

	return (
		<section className="products-main-section">
				<div className='sort-btn-container'>
					{/* <button className='sort-by-btn' onClick={handleSortByName} >Sort by name</button>
					<button className='sort-by-btn' onClick={handleSortByPrice}>Sort by lowest price</button>
					<button className='sort-by-btn' onClick={handleSortByHighPrice }>Sort by highest price</button> */}
					<button className='sort-by-btn' onClick={toggleDropdown}>Sort by</button>
					{showDropdown && (
						<ul className='dropdown-menu'>
							<li onClick={() => {handleSortByName(); toggleDropdown()}}>Sort by name</li>
							<li onClick={() => {handleSortByPrice(); toggleDropdown()}}>Sort by lowest price </li>
							<li onClick={() => {handleSortByHighPrice(); toggleDropdown()}}>Sort by highest price </li>
						</ul>
					)

					}
				</div>
			<div className='products-section'>
				{products.map(product => (
					<div className='product-container' key={product.key}>
						<div>
							<img className='product-box' src={product.imageURL} alt={product.name}/>
						</div>
						<div className='name-price-container'>
							<div>{product.name}</div>
							<div>{product.price} kr</div>
						</div>
						<div className="add-view-btn">
							<button className='view-btn'>View</button>
							<button className='add-btn' onClick={() => handleAddToCart(product) } >Add</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
	
};
export default ProductList;
