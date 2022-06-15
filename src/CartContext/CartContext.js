import React, { createContext } from "react"
import Toaster from "../components/Toaster/Toaster";
export const CartContext = createContext();
const {Provider} = CartContext

export default function CartProvider({children}){
    const [cart, setCart] = React.useState([])

    // addToCart
    const addToCart = (productItem, count) => {
        if(isInCart(productItem.id)) {
        const newCart = cart.map((cartItem) => {
            if(cartItem.id === productItem.id) {
            cartItem.quantity += count
            }
            return cartItem
        })
        setCart(newCart)
        }
        else {
        setCart([...cart, {...productItem, quantity: + count}]);
        }
        <Toaster message="¡producto agregado al carrito!" />
    }

    //isInCart
    const isInCart = (id)=>{
    return cart.find((productItem) => productItem.id === id)
     }


//RECORDAR PROBAR CUANDO SE CONSTRUYA CART VIEW
    // deleteAll
    const deleteAll = () => {
    setCart([])
     }

     //removeFromCart
    const removeFromCart = (id) => {
        const newCart = cart.filter((cartItem) => cartItem.id !== id);
        setCart(newCart)
    }

    //Calculo del Precio Total    
    const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return(
        <Provider value={{
            cart,
            addToCart,
            deleteAll,
            removeFromCart,
            totalPrice,
        }}>{children}</Provider>
    )

}