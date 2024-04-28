import { create } from "zustand";

export const useCartStore = create ((set) => ({
	items: [],

	deleteProduct: (key) => set(state => ({
		items: state.items.filter(item => item.key !== key)
	  })),
	  
	addItem: (newItem) => set((state) =>{
		const existingItem = state.items.find(item => item.key === newItem.key)
		if (existingItem) {
			return {
				items: state.items.map( item =>
					item.key === newItem.key ? { ...item, quantity: item.quantity + 1 } : item
					)
			}
		} else {
			return {
				items: [ ...state.items, { ...newItem, quantity: 1 }]
			}
		}
	})


}) )
