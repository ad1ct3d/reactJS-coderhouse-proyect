import React, { useState, useEffect } from "react";
import {ItemList} from './ItemList';
import { Data } from "../../data/data";
import { Fragment } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryID } = useParams();


    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Data);
                console.log(Data)
            }, 1000)
        })

        getItems.then((res) => {
            categoryID ? setItems(res.filter(item => item.categoryID === categoryID))
           : setItems(res);
        });

    }, [categoryID]);
    
    return (
        <Fragment>
            <div className='itemList'>
                <ItemList items={items} key={Data.productID}/>
            </div>
        </Fragment>
    )
}

export default ItemListContainer