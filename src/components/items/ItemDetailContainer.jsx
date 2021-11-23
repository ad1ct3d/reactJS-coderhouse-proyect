import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import  ItemDetail  from "./products/ItemDetail";
import { Data } from '../../data/data.js';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { productID } = useParams();

    useEffect(() => {
        const getItemDetail = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Data);
            }, 2000)
        })


        getItemDetail.then((res) => {
            const prod = res.find((i) => i.productID === `${productID}`) 
            setItem(prod)

        })
        console.log(item)
    }, [ productID ]);



        return (
            <Fragment>
                <ItemDetail item={item} />
            </Fragment>
        )
}

export default ItemDetailContainer