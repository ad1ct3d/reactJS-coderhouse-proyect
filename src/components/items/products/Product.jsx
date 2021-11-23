import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import img from '../../../img/imagen1.jpg'

export const Product = ({productID, titulo, categoryID, precio}) => {
    return (
        <Fragment>
                    
            {/* card de producto */}
            <div className='productCard' key={productID}>

                {/* imagen */}
                <Link to={`/product/${productID}`}><img className='productImg' src={img} alt="producto" /></Link>

                {/* titulo */}
                <a href="#" className='productTitle'>{titulo}</a>

                {/* precio */}
                <p className='productPrice'>${precio}</p>

                <button className='addToCartBtn'>Agregar al carrito</button>        
            </div>
        </Fragment>
    )
}


