import ItemCount from "../itemCount/ItemCount"
import { Button } from "react-bootstrap"
import {NavLink} from "react-router-dom"
import React from "react"
import { CartContext } from "../CartContext/CartContext"
export default function ItemDetail({productItem}){

 //Usando el contexto
 const {addToCart} = React.useContext(CartContext)


const [quantity, setQuantity] = React.useState(0)

const handleOnAdd = (quantity)=>{
    addToCart(productItem, quantity)
    setQuantity(quantity)
}

console.log(productItem)
// Renderizado
    return(
        <div className="GridProductContainer">
            <div className="ItemGrid1">
                <img src={productItem.img} alt={productItem.title}/>
            </div>
            <div className="ItemGrid2">
                <div>
                    <h1>{productItem.title}</h1>
                    <p>Stock Disponible: {productItem.stock}</p>
                    <p>${productItem.price}</p>
                    {
                        quantity === 0 ?
                        <ItemCount max={productItem.stock} initial={1} haveButton buttonName="Agregar al carrito" handleOnClick={handleOnAdd}/> : <NavLink to="/Cart"><Button style={{marginTop: "20px"}} variant="success">Ir al Carrito</Button></NavLink> 

                    }
                </div>
            </div>
            <div className="ItemGrid3">
                <div>
                    <h2>Caracteristicas principales</h2>
                    <ul>
                        <li>Caracteristica 1</li>
                        <li>Caracteristica 2</li>
                        <li>Caracteristica 3</li>
                    </ul>
                </div>
                <div>
                    <h2>Información del producto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}