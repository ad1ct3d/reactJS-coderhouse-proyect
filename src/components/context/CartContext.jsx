
import React, { useEffect } from 'react'
import { useState } from 'react';


export const CartContext = React.createContext();

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);
    const [userEmail, setUserEmail] = useState('')

    const isOnCart = (id) => {
        const resultado = cart.find((x) => x.id === id)

        if (resultado !== undefined) {
            return true
        } else {
            return false
        }
    }

    const addToCart = (item, cantidad) =>{
        total()
        if (isOnCart(item.id)) {
            sumarCantidad(item, cantidad)
            console.log(item)
        } else {
            setCart([...cart, {...item,cantidad}])
        }
    }

    const total = () => {
        const sumaTotal = cart.reduce(
            (acc, prev) => acc + prev.cantidad * prev.precio, 0
        )
        return sumaTotal
    }

    const sumarCantidad = (item, cantidad) => {
        const unidad = [...cart]
        unidad.forEach((x) => {
            (x.productID === item.productID) & (x.cantidad !== item.stock)
            ? (x.cantidad += cantidad)
            : alert ('cantidad maxima alcanzada')
        })
    }

    const deleteItem = (id) => {
        setCart(cart.filter((x) => x.id !== id))
    }

    const cantidadTotal = () => {
       const result = cart.reduce(
           (acc, cur) => cur.cantidad + acc, 0
        )
       return result
    }


    const getUser = (form) => {
        setUserEmail(form)
    }


    const deleteCart = () => {
        setCart([])
    };

    return(
        <CartContext.Provider value={{userEmail, getUser, addToCart, cart, deleteCart, total, cantidadTotal, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}

