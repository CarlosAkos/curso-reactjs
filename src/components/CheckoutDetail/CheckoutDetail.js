import {CartContext} from "../../CartContext/CartContext";
import React from "react"
export default function CheckoutDetail() {
    const {cart, totalPrice} = React.useContext(CartContext)
    return (
        <div className="checkoutDetailContainer">
            <h3>Detalle de la compra</h3>
            {
                cart.map((product) => {
                    const tlPriceProduct = product.price * product.quantity;
                    return (
                        <div className="checkoutDetailGrid" key={product.id}>
                            <div className="ImgCheckoutProduct">
                                <img src={product.img} alt={product.title}/>
                            </div>

                            <div className="DetailCheckoutProduct">
                                <h3>{product.title}</h3>
                                <p>Cantidad: {product.quantity}</p>
                            </div>

                            <div className="PriceProduct">
                                <p>${tlPriceProduct}</p>
                            </div>
                        </div>
                    )
                })
            }
            <div className="TotalCheckoutFlex">
                <div className="Total">
                    <h3>Total</h3>
                </div>
                <div className="TotalPriceCheckout">
                    <p>$ {totalPrice}</p>
                </div>
            </div>
        </div>
    )

}