import React, { useState, useEffect } from "react";
import {ItemList} from './ItemList';
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore'

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const ref = collection(db, 'products')
        getDocs(ref).then((snapShot) => {
            const products = snapShot.docs.map((doc) => {
                return {
                    id: doc.id, ...doc.data(),
                }
            })
            const categorias = products.filter((i) => i.categoryID === `${id}`)
            id === undefined ? setItems(products) : setItems(categorias)
        })

    }, [id])

    return (
        <Fragment>
            <ItemList items={items} />
        </Fragment>
    )
}

export default ItemListContainer