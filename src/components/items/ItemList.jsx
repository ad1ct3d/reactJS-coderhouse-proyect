import React from "react";
import { Product } from './products/Product'

export const ItemList = ({items}) => {
    return (
        <section className='productsContainer'>
            {items?.map((item) => (
                <Product {...item} key={item.id}/>
            ))}
        </section>
    )
}

export default ItemList