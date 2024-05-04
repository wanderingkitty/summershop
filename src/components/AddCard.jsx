import React, { useState } from 'react';
import { db } from '../data/firebase.js';
import { collection, addDoc } from 'firebase/firestore/lite';
import '../css/EditCard.css'

const AddCard = ({ onProductAdd }) => {
    const [newProductData, setNewProductData] = useState({
        name: '',
        price: '',
        imageURL: '',
        description: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewProductData({ ...newProductData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'products'), newProductData);
            onProductAdd({ id: docRef.id, ...newProductData });
            setNewProductData(
				{name: '', price: '', imageURL: '', description: '' }
				); 
        } catch (error) {
            console.error("Error adding new product:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="new-product-form">
            <div className="form-group">
                <label>Name: </label>
                <input type="text" name="name" value={newProductData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Price: </label>
                <input type="number" name="price" value={newProductData.price} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Image URL: </label>
                <input type="text" name="imageURL" value={newProductData.imageURL} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Description: </label>
                <textarea name="description" value={newProductData.description} onChange={handleChange} required />
            </div>
            <button type="submit" className="save-btn">Add Product</button>
        </form>
    );
};

export default AddCard;
