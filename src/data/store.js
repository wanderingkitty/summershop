import { create } from 'zustand';

const useStore = create(set => ({
    // Initiala produkter
    products: [],

    // Funktion för att sätta produkter
    setProducts: newProducts => set({
        products: newProducts
    }),

    // Funktion för att lägga till en produkt
    addProduct: product => set(state => ({
        products: [...state.products, product]
    })),

    // Funktion för att ta bort en produkt baserat på dess 'key'
    deleteProduct: productKey => set(state => ({
        products: state.products.filter(product => product.key !== productKey)
    })),

    // Initiala beställda produkter
    orderedItems: [],

    // Funktion för att lägga till en beställd produkt
    addOrderedItem: item => set(state => ({
        orderedItems: [
            ...state.orderedItems,
            {
                ...item,
                // Genererar ett unikt ID baserat på nuvarande tidsstämpel
                id: Date.now(),
            },
        ],
    })),

    // Funktion för att ta bort en beställd produkt med ett specifikt ID
    deleteOrderedItem: id => set(state => ({
        orderedItems: state.orderedItems.filter(item => item.id !== id),
    })),

    // Funktion för att rensa listan av beställda produkter
    clearItems: () => set({ orderedItems: [] }),
}));

export { useStore };