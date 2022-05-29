import ItemCount from "../itemCount/ItemCount"
import { Button } from "react-bootstrap"
import {NavLink} from "react-router-dom"
import React from "react"
import { CartContext } from "../CartContext/CartContext"
export default function ItemDetail({ProductItem}){

 //Usando el contexto
 const {addToCart} = React.useContext(CartContext)

 // Declaración de constantes para el contador
const [count, setCount] = React.useState(1)

// Funciones manejadoras del contador
const onDecrease = () => {
     if(count > 1){
        setCount(count - 1)
     }
 }
 const onAdd = () => {
    if(count < ProductItem.Stock){
       setCount(count + 1)
    }
}

// Botones de compra
const [action, setaction] = React.useState("comprar")
const AddToCart = ()=> {
    return(<Button style={{marginTop: "20px"}} onClick={()=>addToCart(ProductItem, count, setaction)}>Agregar al Carrito</Button>)
}

const GoToCart = ()=> {
    return(<NavLink to="/Cart"><Button style={{marginTop: "20px"}} variant="success">Ir al Carrito</Button></NavLink>)
}

const ButtonCart = action === "comprar" ? AddToCart : GoToCart


// Renderizado
    return(
        <div className="GridProductContainer">
            <div className="ItemGrid1">
                <img src={ProductItem.Img} alt={ProductItem.Title}/>
            </div>
            <div className="ItemGrid2">
                <div>
                    <h1>{ProductItem.Title}</h1>
                    <p>Stock Disponible: {ProductItem.Stock}</p>
                    <p>${ProductItem.Price}</p>
                    <ItemCount count={count} onAdd={onAdd}  onDecrease={onDecrease}/><br />
                    <ButtonCart />
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