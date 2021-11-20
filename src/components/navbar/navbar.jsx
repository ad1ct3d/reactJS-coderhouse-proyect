import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
const Navbar = () => {


    return (
        <Fragment>
             <div className="nav-container">
                <nav className='navbar'>
                    <Link to="/home" className='navbar-btn logo'>LOGO</Link>

                    <div className='dropdown'>
                        <button className='navbar-btn dropBtn'>BOX</button>
                        <div className='dropdownContent'>
                            <Link to="#">DESAYUNOS</Link>
                            <Link to="#">CATERING</Link>
                        </div>
                    </div>

                    <div className='dropdown'>
                        <button className='navbar-btn dropBtn'>TORTAS</button>
                        <div className='dropdownContent'>
                            <Link to="/simples">TORTAS SIMPLES</Link>
                            <Link to="/categories/elaboradas">TORTAS ELABORADAS</Link>
                            <Link to="#">LETER / NUMBER</Link>
                        </div>
                    </div>
                    <Link to="/contact" className='navbar-btn'>CONTACTO</Link>
                </nav>
            </div>
        </Fragment>
    )
}

export default Navbar;