import React, { useState, useEffect } from 'react';
import { db } from '../data/firebase.js';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore/lite';
import '../css/EditCard.css'
import TrashDeleteImg from '../assets/delete.png'


const EditCard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productCollection = collection(db, 'products');
                const snapshot = await getDocs(productCollection);
                const productList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productList);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products: ", error);
                setLoading(false);
            }
        };
        
        fetchProducts();
    }, []);

    const handleUpdate = async (product, updatedFields) => {
        const productRef = doc(db, 'products', product.id);
        try {
            await updateDoc(productRef, updatedFields);
            setProducts(products.map(product => product.id === product.id ? { ...product, ...updatedFields } : prod));
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

	const handleDelete = async (product) => {
		const productItem = doc(db, 'products', product.id)
		try {
			await deleteDoc(productItem)
			setProducts(products.filter(p => p.id !== product.id))
		} catch (error) {
			console.log('Error deleting an item', error);
		}
	}

    return (
        <div>
            {loading ? <p>Loading...</p> : (
                <div>
                    {products.map(product => (
                        <ProductForm key={product.id} product={product} onSave={handleUpdate} />
                    ))}
                </div>
            )}
        </div>
    );
};

const ProductForm = ({ product, onSave, onDelete }) => {
    const [formData, setFormData] = useState({
        name: product.name,
        price: product.price,
        imageURL: product.imageURL,
        description: product.description
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(product, formData);
    };

    return (
        <form onSubmit={handleSubmit} className="edit-form">
            <div className="form-layout">
                <div className="image-preview">
                    <img src={formData.imageURL || 'https://via.placeholder.com/150'} alt="Product" className="image-display"/>
                </div>
                <div className="form-content">
                    <div className="form-group">
                        <label>Name: </label>
                        <input name="name" value={formData.name} onChange={handleChange} className="input-field"/>
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="number" name="price" value={formData.price} onChange={handleChange} className="input-field"/>
                    </div>
                    <div className="form-group">
                        <label>Image URL: </label>
                        <input name="imageURL" type="text" value={formData.imageURL} onChange={handleChange} placeholder="URL image link" className="input-field"/>
                    </div>
                    <div className="form-group">
                        <label>Description </label>
                        <input name="description" value={formData.description} onChange={handleChange} className="input-field"/>
                    </div>
               
                    <button type="submit" className="save-btn">Save Changes</button>
                </div>
				<div className="delete-button">
                        <img src={TrashDeleteImg} alt="Delete" onClick={() => onDelete(product)} className="delete-btn"/>
                    </div>
            </div>
        </form>
    );
};

export default EditCard