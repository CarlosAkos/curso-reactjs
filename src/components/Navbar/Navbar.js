import CartWidget from "../CartWidget/CartWidget"
import {NavLink} from "react-router-dom"
export default function header() {
    return(
        <nav className="Header">
            <NavLink to="/" className="navbar-brand">LOGO</NavLink>
            <div className="NavOptions">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/products">Productos</NavLink>
                <NavLink to="/">Contacto</NavLink>
                <CartWidget itemsInCart={2}/>
            </div>
        </nav>
    ) 
};