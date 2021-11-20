import React, { useState, useEffect } from "react";
import {ItemList} from './ItemList';
import { Data } from "../../data/data";
import { Fragment } from "react";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Data);
            }, 1000)
        })

        getItems.then((res) => {
            setItems(res);
        });

    }, []);
    
    return (
        <Fragment>
            <div className='itemList'>
                <ItemList items={items}/>
            </div>
        </Fragment>
    )
}