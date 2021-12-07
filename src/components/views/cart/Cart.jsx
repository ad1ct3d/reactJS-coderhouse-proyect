import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart } = useContext(CartContext);

    console.log(cart)

    return (
        <>

        <h1>CARRITO</h1>
            {cart.map((item)=>(
                <div key={item.productID}>
                    <p>{item.titulo}</p>
                    <p>{item.precio}</p>
                </div>
            ))}
        </>
    )
}

export default Cart;