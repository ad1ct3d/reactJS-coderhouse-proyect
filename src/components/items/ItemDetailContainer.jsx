import React, { useState, useEffect, useContext } from "react";
import { Fragment } from "react";
import {CartContext} from '../context/CartContext';
import  ItemDetail  from "./products/ItemDetail";
import { Data } from '../../data/data.js';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { productID } = useParams();
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const getItemDetail = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Data);
            }, 1000)
        })


        getItemDetail.then((res) => {
            const prod = res.find((i) => i.productID === `${productID}`) 
            setItem(prod)
        })
    }, [ productID ]);

        // agregar al carrito=
        const onAdd = (cantidad) => {
            // console.log({...item, cantidad: cantidad});
            addToCart(item, cantidad)
        };

        return (
            <Fragment>
                <ItemDetail item={item} onAdd={onAdd} />
            </Fragment>
        )
}

export default ItemDetailContainer