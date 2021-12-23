import React, { useState, useEffect} from "react";
import { Fragment } from "react";
import  ItemDetail  from "./products/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "@firebase/firestore";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const ref = doc(db, 'products', id);
        getDoc(ref).then((snap) => {
            setItem({
                id: snap.id, ...snap.data(),
            });
        });
    }, [id]);


        return (
            <Fragment>
                <ItemDetail item={item} />
            </Fragment>
        )
}

export default ItemDetailContainer