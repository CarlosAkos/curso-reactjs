import {NavLink} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


export default function Menu(){

    return(
    <div className="NavOptions">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/products">Catálogo</NavLink>
        <NavLink to="/products/motherboard">Motherboards</NavLink>
        <NavLink to="/products/procesador">Procesadores</NavLink>
        <CartWidget/>
    </div>
    )

}