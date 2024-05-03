import '../css/HomePage.css';
import '../css/index.css';
import ProductList from '../components/ProductList';
import React from 'react';


const HomePage = () => {
    // console.log("HomePage is rendering");
    return (
        <div className="home-page">
            <ProductList />  
        </div>
    );
};

export default HomePage;
