import React, {createContext} from "react"
export const CartContext = createContext();
const {Provider} = CartContext

export default function CartProvider({children}) {
    const [cart, setCart] = React.useState([])

    // Función para agregar al carrito
    const addToCart = (productItem, count) => {
        if (isInCart(productItem.id)) {
            const newCart = cart.map((cartItem) => {
                if (cartItem.id === productItem.id) {
                    cartItem.quantity += count
                }
                return cartItem
            })
            setCart(newCart)
        } else {
            setCart([
                ...cart, {
                    ...productItem,
                    quantity: +count
                }
            ]);
        }
    }

    //Función para agregar verificar si está en carrito
    const isInCart = (id) => {
        return cart.find((productItem) => productItem.id === id)
    }

    // Función para limpiar el carrito
    const deleteAll = () => {
        setCart([])
    }

    //Función para remover un producto del carrito
    const removeFromCart = (id) => {
        const newCart = cart.filter((cartItem) => cartItem.id !== id);
        setCart(newCart)
    }

    //Calculo del Precio Total
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );

    return (
        <Provider
            value={{
                cart,
                addToCart,
                deleteAll,
                removeFromCart,
                totalPrice
            }}>{children}</Provider>
    )

}