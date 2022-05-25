import ItemCount from "../itemCount/ItemCount"
import { Button } from "react-bootstrap"
import {NavLink} from "react-router-dom"
import React from "react"
export default function ItemDetail({ProductItem}){

const [itemAddToCart, setitemAddToCart] = React.useState({})

// Funciones manejadoras del contador 
const Initial = 1
const [count, setCount] = React.useState(Initial)
const handleCountMenus = () => {
     if(count > 1){
        setCount(count - 1)
     }
 }
 const handleCountPlus = () => {
    if(count < ProductItem.Stock){
       setCount(count + 1)
    }
}

// Botones de compra
const [action, setaction] = React.useState("comprar")
const AddToCart = ()=> {
    return(<Button style={{marginTop: "20px"}} onClick={()=>{setitemAddToCart({units: count, Title: ProductItem.Title,
        Price: ProductItem.Price,
        Img: ProductItem.Img,}); setaction("ir al carrito")}}>Agregar al Carrito</Button>)
}

const GoToCart = ()=> {
    return(<NavLink to="/Cart"><Button style={{marginTop: "20px"}} variant="success">Ir al Carrito</Button></NavLink>)
}

const ButtonCart = action === "comprar" ? AddToCart : GoToCart

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
                    <ItemCount count={count} handleCountPlus={handleCountPlus}  handleCountMenus={handleCountMenus}/><br />
                    <ButtonCart />
                    {/* <Button style={{marginTop: "20px"}} onClick={()=>console.log("hola")}>Agregar al Carrito</Button> */}
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