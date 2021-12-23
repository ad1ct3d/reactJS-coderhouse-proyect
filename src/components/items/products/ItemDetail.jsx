import { Fragment, useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import img from '../../../img/imagen1.jpg'
import Counter from '../counter/Counter'


export const ItemDetail = ({item}) => {

    const { addToCart } = useContext(CartContext)

    const onAdd = (cantidad) => {
        addToCart(item, cantidad)
    }
    return (
        <Fragment>
            <section className='detailContainer' key={ item.productID }>

                {/* imagen */}
                <img src={img} alt="productIMG" className='detailImg'/>

                {/* esta clase esta muy mal nombrada pero estoy cansado. Despues lo ordeno */}
                <div className='detailContainerContainer'>

                    {/* titulo */}
                    <p className='detailTitle'>{ item.titulo }</p>

                    {/* precio */}
                    <p className='detailPrice'>${ item.precio }</p>

                    {/* descripcion */}
                    <p className='detailDescription'>Lorem ipsum dolor sit amet.</p>

                    {/* contador */}
                    <Counter stock={item.stock} onAdd={onAdd} />


                    {/* Finalizar compra */}
                    <Link to='/cart'><button className='checkOutBtn'> Finalizar compra </button></Link>

                </div>

            </section>
        </Fragment>
    )
};

export default ItemDetail