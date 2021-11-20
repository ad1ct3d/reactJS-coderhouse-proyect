import { Fragment } from 'react/cjs/react.production.min'
import img1 from '../../img/imagen1.jpg'
import headerImg from '../../img/header-img.png'
import '../../App.css'

const Front = () => {
    return (
        <Fragment>
            <img className='headerImg' src={headerImg} alt="Paulisserie" />

            <div className='containerPortada'>
                <img className='imgPortada' src={img1} alt="imagen"/>
            </div>
        </Fragment>
    )
}

export default Front;