import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";

const Counter = ({stock, onAdd}) => {

    const [number, setNumber] = useState(1)

    // agregar item
    const add = () => {
        number !== stock && setNumber(number + 1);
    }

    // restar item
    const remove = () => {
        number !== 1 && setNumber(number - 1);
    }

    return (
        <Fragment>
            <div className='counterContainer'>
                <button id='removeBtn' className='removeBtn' onClick={remove}>-</button>
                <p>{number}</p>
                <button id='addBtn' className='addBtn' onClick={add}>+</button>
            </div>

           {/* boton */}
            <button className='detailAddToCartBtn' onClick={()=>onAdd(number)}> agregar al carrito </button>
        </Fragment>
    )
}

export default Counter