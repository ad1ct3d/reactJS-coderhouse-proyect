import React from "react";
import { Fragment } from "react";
import img from '../../../img/imagen1.jpg'

export const Product = ({id, titulo, categoryID, precio}) => {
    return (
        <Fragment>
                    
            {/* card de producto */}
            <div className='productCard' key={id}>

                {/* imagen */}
                <img className='productImg' src={img} alt="producto" />

                {/* titulo */}
                <a href="#" className='productTitle'>{titulo}</a>

                {/* precio */}
                <p className='productPrice'>${precio}</p>

                <button className='addToCartBtn'>Agregar al carrito</button>        
            </div>
        </Fragment>
    )
}


