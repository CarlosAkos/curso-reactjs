import React, { createContext } from "react"
import { Card } from "react-bootstrap";

export const CartContext = createContext();
const {Provider} = CartContext

export default function CartProvider({children}){
    const [Cart, setCart] = React.useState([])

    // addToCart
    const addToCart = (ProductItem, count, setaction) => {
        if(isInCart(ProductItem.Id)) {
        const NewCart = Cart.map((cartItem) => {
            if(cartItem.id === ProductItem.id) {
            cartItem.quantity += count
            console.log(Cart)
            }
            return cartItem
        })
        setCart(NewCart)
        }
        else {
        setCart([...Cart, {...ProductItem, quantity: + count}]);
        console.log(Cart)
        }
        alert("¡producto agregado al carrito!")
        setaction("")
    }

    //isInCart
    const isInCart = (Id)=>{
    return Cart.find((ProductItem) => ProductItem.Id === Id)
     }


//RECORDAR PROBAR CUANDO SE CONSTRUYA CART VIEW
    // deleteAll
    const deleteAll = () => {
    setCart([])
     }

     //removeFromCart
    const removeFromCart = (Id) => {
        const newCart = Cart.filter((cartItem) => cartItem.Id !== Id);
        setCart(newCart)
    }


    return(
        <Provider value={{
            Cart,
            addToCart,
        }}>{children}</Provider>
    )

}