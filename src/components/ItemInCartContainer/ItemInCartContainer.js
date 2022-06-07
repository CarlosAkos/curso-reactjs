import ItemInCart from "../ItemInCart/ItemInCart"
import { Button } from "react-bootstrap"
import {CartContext} from "../CartContext/CartContext"
import React from "react"
import {NavLink} from "react-router-dom"

export default function ItemInCartContainer(){
   //Usando el contexto
   const {Cart, deleteAll, removeFromCart} = React.useContext(CartContext) 
    
   const PrecioTotal = function(){
        
        const result = Cart.reduce((acc, item) => acc + item.quantity * item.Price, 0);
        return(
            <div className="TotalPriceGrid">
                <div className="Total">
                    <h3>Total</h3>
                </div>
                <div className="TotalPrice">
                    <p>$ {result}</p>
                </div>
            </div>
        )
    }
    
    const CartActions = function(){
        return(
            <div className="CartActions">
                <Button variant="outline-danger" onClick={deleteAll}>Vaciar Carrito</Button>
                <Button>Terminar Comprar</Button>
            </div>
        )
    }
    
    const EmptyCart = function(){
        return(
            <div className="EmptyCart">
                <h2>El Carrito está vacio</h2>
                <p>¡Visita nuestro catálogo y agrega alguno!</p>
                <NavLink to="/products"><Button>Ver los productos</Button></NavLink>
            </div>
        )
    }

    
    const DisplayCart = function(){
        return( 
            <div className="ItemInCartContainer">
                {Cart.map((product) => {
                    return(
                        <ItemInCart product={product} key={product.Id}/>
                    )
                })}            
                <PrecioTotal />
                <CartActions />
            </div>
        )
    }
    

    const ConditionCartRender = function(){
     return(Cart.length === 0 ? <EmptyCart /> : <DisplayCart />)
    }  
    
    
    
    return(
            <ConditionCartRender />
        )
}