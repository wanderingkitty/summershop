import './HomePage.css';
import '../index.css';
import { useStore } from '../data/categoryList';
import { useState } from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
	const { categoryList } = useStore((state) => ({
		categoryList: state.categoryList
	}));
	
	const [count, setCount] = useState(1);
	
	return (
	
		<div className="home-page">
		{categoryList.map(category => (
			<div key={category.id} className="category-container">
			<div className="image-with-text">
			<img src={category.image} alt={category.name} />
			<h2>{category.name}</h2>
			</div>
			</div>
		))}
		<ProductList/>
			</div>
			);
		};
		
		export default HomePage;
		