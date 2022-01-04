import { Fragment } from "react/cjs/react.production.min";
import './footer.css'

const Footer = () => {
    return (
        <Fragment>
            <footer className='footer'>

                <div className="footerSection">
                    <h3>Navegacion</h3>
                    <p>link</p>
                    <p>link</p>
                    <p>link</p>
                    <p>link</p>
                </div>

                <div className="footerSection">
                    <h3>Contacto</h3>
                    <p>telefono</p>
                    <p>email</p>
                </div>

                <div className="footerSection">
                    <h3>Redes sociales</h3>
                </div>

            </footer>
        </Fragment>
    )
}

export default Footer;