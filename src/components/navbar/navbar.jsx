import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { CartContext } from "../context/CartContext";
import img1 from '../../img/header-img-recortada.png'
import './navbar.css'

const Navbar = () => {
    const {cantidadTotal} = useContext(CartContext)
    const items = {cantidadTotal: cantidadTotal()}

    return (
        <Fragment>
            <div className="navbar-header">
                <Link to='/dashboard'>Panel de usuario</Link>
                <p>|</p>
                <Link to='/log-in'>Iniciar Sesión</Link>
            </div>

             <div className="nav-container">


                <nav className='navbar'>
                    <Link to="/" className='navbar-btn logo'><img className="logoImg" src={ img1 } alt="Paulisserie" /></Link>

                    {/* dropdown BOX */}
                    <div className='dropdown'>
                        <button className='navbar-btn dropBtn'>BOX</button>
                        <div className='dropdownContent'>
                            <NavLink to="/category/desayunos">DESAYUNOS</NavLink>
                            <NavLink to="/category/catering">CATERING</NavLink>
                        </div>
                    </div>

                    {/* dropdown TORTAS */}
                    <div className='dropdown'>
                        <button className='navbar-btn dropBtn'>TORTAS</button>
                        <div className='dropdownContent'>
                            <NavLink to="/category/tortas-simples">TORTAS SIMPLES</NavLink>
                            <NavLink to="/category/tortas-elaboradas">TORTAS ELABORADAS</NavLink>
                            <NavLink to="/category/leter-number">LETER / NUMBER</NavLink>
                        </div>
                    </div>

                    <NavLink to="/contact" className='navbar-btn'>CONTACTO</NavLink>

                    {/* CARRITO */}
                    <Link to='/cart' className='navbar-btn'>CARRITO ( {cantidadTotal()} )</Link>

                </nav>
            </div>
        </Fragment>
    )
}

export default Navbar;