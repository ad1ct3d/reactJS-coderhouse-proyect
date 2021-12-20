import React from 'react'
import { useState } from 'react';


export const CartContext = React.createContext();

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);




    const isOnCart = (productID) => {
        const resultado = cart.find((x) => x.productID === productID)

        if (resultado !== undefined) {
            return true
        } else {
            return false
        }
    }

    const addToCart = (item, cantidad) =>{
        total()
        if (isOnCart(item.productID)) {
            sumarCantidad(item, cantidad)
        } else {
            setCart([...cart, {...item,cantidad}])
        }
    }

    const sumarCantidad = (item, cantidad) => {
        const unidad = [...cart]
        unidad.forEach((x) => {
            (x.productID === item.productID) & (x.cantidad !== item.stock)
            ? (x.cantidad += cantidad)
            : alert ('cantidad maxima alcanzada')
        })
    }

    const total = () => {
        const sumaTotal = cart.reduce(
            (acc, prev) => acc + prev.cantidad * prev.precio, 0
        )
        return sumaTotal
    }

    const deleteCart = () => {
        setCart([])
    };

    return(
        <CartContext.Provider value={{addToCart, cart, deleteCart, total}}>
            {children}
        </CartContext.Provider>
    )
}

