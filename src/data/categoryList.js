// categoryList.js
import { create } from 'zustand';

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
