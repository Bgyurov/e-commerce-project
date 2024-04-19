import React, { createContext, useState } from "react";
import { getProductData } from "./products.js";
import { discountsArray, applyDiscount } from './discodes.js';

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    applyDiscount: () => {}
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    function getTotalCost(discountCode) {
        let totalCost = 0;
        cartProducts.forEach((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += productData.price * cartItem.quantity;
        });

        // Apply discount if a discount code is provided
        if (discountCode && discountCode !== '') {
            const { discountedPrice } = applyDiscount(totalCost, discountCode);
            return Number(discountedPrice);
        }

        return Number(totalCost);
    }

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity || 0;
        return quantity;
    }

    function addOneToCart(id) {
        const existingProductIndex = cartProducts.findIndex(product => product.id === id);
        if (existingProductIndex === -1) {
            setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
        } else {
            const updatedCart = [...cartProducts];
            updatedCart[existingProductIndex].quantity += 1;
            setCartProducts(updatedCart);
        }
        // getTotalCost(); // No need to call getTotalCost here
    }

    function removeOneFromCart(id) {
        const existingProductIndex = cartProducts.findIndex(product => product.id === id);
        if (existingProductIndex !== -1) {
            const updatedCart = [...cartProducts];
            if (updatedCart[existingProductIndex].quantity > 1) {
                updatedCart[existingProductIndex].quantity -= 1;
            } else {
                updatedCart.splice(existingProductIndex, 1);
            }
            setCartProducts(updatedCart);
            // getTotalCost(); // No need to call getTotalCost here
        }
    }

    function deleteFromCart(id) {
        const updatedCart = cartProducts.filter(product => product.id !== id);
        setCartProducts(updatedCart);
        // getTotalCost(); // No need to call getTotalCost here
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        applyDiscount, // Uncomment this if you define or import applyDiscount function
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}
