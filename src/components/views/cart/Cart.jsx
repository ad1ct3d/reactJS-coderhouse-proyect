import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            {cart.map((item)=>(
                <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </>
    )
}

export default Cart;