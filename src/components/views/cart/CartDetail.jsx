import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartDetail = ({ prod }) => {
    const { cart, deleteCart, cantidadTotal, total} = useContext(CartContext);
    const items = {cantidadTotal: cantidadTotal()}

    console.log(cart)

    return (
        <>
                <div key={prod.id}>
                    <p>{prod.titulo}</p>
                    <p>${prod.precio}</p>
                    <p>cantidad: {prod.cantidad}</p>
                </div>


        </>
    )
}

export default CartDetail;