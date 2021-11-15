import { Fragment } from "react/cjs/react.production.min";
const Navbar = () => {
    return (
        <Fragment>
             <div className="nav-container">
                <nav className='navbar'>
                    <a href="#" className='navbar-btn logo'>LOGO</a>

                    <div className='dropdown'>
                        <button className='navbar-btn dropBtn'>BOX</button>
                        <div className='dropdownContent'>
                            <a href="#">DESAYUNOS</a>
                            <a href="#">CATERING</a>
                        </div>
                    </div>

                    <div className='dropdown'>
                        <button className='navbar-btn dropBtn'>TORTAS</button>
                        <div className='dropdownContent'>
                            <a href="#">TORTAS SIMPLES</a>
                            <a href="#">TORTAS ELABORADAS</a>
                            <a href="#">LETER / NUMBER</a>
                        </div>
                    </div>
                    <a href="#" className='navbar-btn'>CONTACTO</a>
                </nav>
            </div>
        </Fragment>
    )
}

export default Navbar;