import { Fragment } from "react/cjs/react.production.min";
import img from '../../../img/imagen1.jpg'

// productos para MAP
const productos = [
    {
        titulo: 'torta vainilla',
        sabor: 'vainilla',
        precio: 50,
        id: 0
    },
    {
        titulo: 'torta chocolate',
        sabor: 'chocolate',
        precio: 80,
        id: 1
    },
    {
        titulo: 'torta limon',
        sabor: 'limon',
        precio: 100,
        id: 2
    }
]


const Product = () => {
    return (
        <Fragment>
            {/* JAVA */}
            {
                productos.map((productos, index) => {
                    return(
                        // card de producto
                        <div className='productCard' key={productos.id}>

                            {/* imagen */}
                            <img className='productImg' src={img} alt="producto" />

                            {/* titulo */}
                            <a href="#" className='prductTitle'>{productos.titulo}</a>

                            {/* precio */}
                            <p className='productPrice'>${productos.precio}</p>

                            <button className='addToCartBtn'>Agregar al carrito</button>        
                        </div>
                    )
                })
            }
        </Fragment>
    )
}

export default Product;

