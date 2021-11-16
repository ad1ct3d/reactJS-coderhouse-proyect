import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";

const Counter = ({stock, initial}) => {

    const [number, setNumber] = useState(0)

    const add = () => {
        number !== stock && setNumber(number + 1);

    }

    const remove = () => {
        number !== initial && setNumber(number - 1);
    }

    return (
        <Fragment>
            <p>{number}</p>
            <button id='addBtn' onClick={add}>+</button>
            <button id='removeBtn' onClick={remove}>-</button>
        </Fragment>
    )
}






// const Counter = ({stock, initial, onAdd}) => {

//     stock = 5;
//     initial = 1;
//     onAdd = initial + 1;

//     return (
//         <Fragment>
//             <h1>contador</h1>
//         </Fragment>
//     )
// }

export default Counter