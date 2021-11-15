import { Fragment } from 'react/cjs/react.production.min'
import img1 from '../../img/imagen1.jpg'
import '../../App.css'

const Front = () => {
    return (
        <Fragment>
        <div className='containerPortada'>
            <img className='imgPortada' src={img1} alt="imagen"/>
        </div>
        </Fragment>
    )
}

export default Front;