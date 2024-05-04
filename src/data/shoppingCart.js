import { create } from "zustand";

export const useCartStore = create((set) => ({
    items: [],

    incrementQuantity: (key) => set((state) => ({
        items: state.items.map(item => 
            item.key === key ? { ...item, quantity: item.quantity + 1 } : item
        ),
    })),

    decrementQuantity: (key) => set((state) => ({
        items: state.items.map(item =>
            item.key === key ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0)
    })),

    deleteProduct: (key) => set((state) => ({
        items: state.items.filter(item => item.key !== key)
    })),

    addItem: (newItem) => set((state) => {
        const existingItem = state.items.find(item => item.key === newItem.key);
        if (existingItem) {
            return {
                items: state.items.map(item =>
                    item.key === newItem.key ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        } else {
            return {
                items: [...state.items, { ...newItem, quantity: 1 }]
            };
        }
    }),

}));
	
// categoryList.js not currently using it

const useStore = create((set) => ({
	categoryList: [
		{
			id: 1,
			name: 'Water Toys',
			image: '/watergun.png'
		},
		{
			id: 2,
			name: 'Outdoor Games',
			image: '/outdoor.jpg'
		},
		{
			id: 3, 
			name: 'Beach Toys',
			image: '/outdoortoys.png'
		},
		{
			id: 4,
			name: 'Pool floats & Accessories',
			image: '/floats.png'
		},
		{
			id: 5,
			name: 'Swimming & Surfing Gear',
			image: '/swimming.png'
		},
		{
			id: 6, 
			name: 'Outdoor Essentials',
			image: '/outplay.png'
		}
	]
}));

export { useStore };
