import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = ({ item }) => {
    const { cart, deleteCart} = useContext(CartContext);

    console.log(cart)

    return (
        <>

        <h1>CARRITO</h1>
            {cart.map((item)=>(
                <div key={item.productID}>
                    <p>{item.titulo}</p>
                    <p>${item.precio}</p>
                    <p>cantidad: {item.cantidad}</p>
                </div>
            ))}

            <button onClick={deleteCart}>Vaciar Carrito</button>
        </>
    )
}

export default Cart;