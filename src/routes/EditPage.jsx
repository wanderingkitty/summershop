import React from 'react';
import { useCartStore } from "../data/shoppingCart";
import EditCard from '../components/EditCard';

const EditPage = () => {
    const items = useCartStore(state => state.items);

    return (
        <div>
            <h1>Products edit page</h1>
			<EditCard/>
        </div>
    );
};

export default EditPage;
