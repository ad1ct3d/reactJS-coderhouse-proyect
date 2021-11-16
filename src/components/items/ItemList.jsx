import { Fragment } from 'react/cjs/react.production.min'
import Counter from './counter/Counter'
import '../../App.css'

const ItemList = () => {
    return (
        <Fragment>
            <section className='itemList'>
                <p>Disponibles: 10</p>
            <Counter stock={10} initial={0}/>
            </section>
        </Fragment>
    )
}

export default ItemList