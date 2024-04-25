import { create } from 'zustand'

const useStore = create( set => ({
	products: [{name: 'test',
				price: 'test' 
	}],

}) )

export { useStore }