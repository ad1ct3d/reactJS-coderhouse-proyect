import { Fragment } from "react"
import img from '../../../img/imagen1.jpg'


export const ItemDetail = ({item}) => {

    console.log(item)
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

                    {/* boton */}
                    <button className='detailAddToCartBtn'> agregar al carrito </button>

                </div>

            </section>
        </Fragment>
    )
};

export default ItemDetail