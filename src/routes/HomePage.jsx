import './HomePage.css';
import '../index.css';
import { useStore } from '../data/categoryList';
import { useState } from 'react';
import ProductList from '../components/ProductList';
import CartPage from '../components/CartPage';
import React from 'react';
import { Link } from 'react-router-dom';

// const HomePage = () => {
// 	console.log('rendering')
// 	// const { categoryList } = useStore((state) => ({
// 	// 	categoryList: state.categoryList
// 	// }));
	
// 	const products = useStore(state => state.products)
	
// 	return (
	
// 		<div className="home-page">
// 		{/* {categoryList.map(category => (
// 			<div key={category.id} className="category-container">
// 			<div className="image-with-text">
// 			<img className='category-pictures' src={category.image} alt={category.name} />
// 			<h2>{category.name}</h2>
// 			</div>
// 			</div>
// 		))} */}
// 		<Link to='/cart'></Link>
// 		<ProductList/>
// 			</div>
// 			);
// 		};
		
// 		export default HomePage;
		


const HomePage = () => {
    console.log("HomePage is rendering");
    return (
        <div className="home-page">
            <h1>Home Page</h1>
				
			
            <ProductList />  
        </div>
    );
};

export default HomePage;
