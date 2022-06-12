import {NavLink} from "react-router-dom"
import Menu from "../Menu/Menu"

export default function header() {
    return(
        <nav className="Header">
            <NavLink to="/" className="navbar-brand">TECHNOHARDWARE</NavLink>
            <Menu />
        </nav>
    ) 
};