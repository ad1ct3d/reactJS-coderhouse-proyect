import { NavLink, Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
const Navbar = () => {


    return (
        <Fragment>
             <div className="nav-container">
                <nav className='navbar'>
                    <Link to="/" className='navbar-btn logo'>LOGO</Link>

                    <div className='dropdown'>
                        <button className='navbar-btn dropBtn'>BOX</button>
                        <div className='dropdownContent'>
                            <NavLink to="/category/desayunos">DESAYUNOS</NavLink>
                            <NavLink to="/category/catering">CATERING</NavLink>
                        </div>
                    </div>

                    <div className='dropdown'>
                        <button className='navbar-btn dropBtn'>TORTAS</button>
                        <div className='dropdownContent'>
                            <NavLink to="/category/tortas-simples">TORTAS SIMPLES</NavLink>
                            <NavLink to="/category/tortas-elaboradas">TORTAS ELABORADAS</NavLink>
                            <NavLink to="/category/leter-number">LETER / NUMBER</NavLink>
                        </div>
                    </div>
                    <NavLink to="/contact" className='navbar-btn'>CONTACTO</NavLink>
                </nav>
            </div>
        </Fragment>
    )
}

export default Navbar;