import React from 'react'
import { useState } from 'react';


export const CartContext = React.createContext();

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) =>{
        setCart([
            ...cart, {...item, cantidad}
        ])
        console.log(cart)
    }
    return(
        <CartContext.Provider value={{addToCart, cart}}>
            {children}
        </CartContext.Provider>
    )
}

