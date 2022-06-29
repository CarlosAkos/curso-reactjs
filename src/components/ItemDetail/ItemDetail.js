import ItemCount from "../itemCount/ItemCount"
import {Button, Toast} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import React from "react"
import {CartContext} from "../../CartContext/CartContext"
export default function ItemDetail({productItem}) {

    //Usando el contexto
    const {addToCart} = React.useContext(CartContext)

    const [show, setShow] = React.useState(false);
    const [quantity, setQuantity] = React.useState(0)
    const handleOnAdd = (quantity) => {
        addToCart(productItem, quantity)
        setQuantity(quantity)
        setShow(true)
    }

    return (
        <> < div className = "GridProductContainer" > <div className="ItemGrid1">
            <img src={productItem.img} alt={productItem.title}/>
        </div>
        <div className="ItemGrid2">
            <h1>{productItem.title}</h1>
            <p>Stock Disponible: {productItem.stock}</p>
            <p>${productItem.price}</p>
            {
                quantity === 0
                    ? <ItemCount
                            max={productItem.stock}
                            initial={1}
                            haveButton="haveButton"
                            buttonName="Agregar al carrito"
                            handleOnClick={handleOnAdd}/>
                    : <NavLink to="/Cart">
                            <Button
                                style={{
                                    marginTop: "20px"
                                }}
                                variant="success">Ir al Carrito</Button>
                        </NavLink>
            }

        </div>
        <div className="ItemGrid3">
            <h2>Información del producto</h2>
            <p>{productItem.description}</p>
        </div>
    </div>
{/*Toast, mensaje de agregado al carrito*/}
    <div className="toastMsg">
        <Toast
            bg={"success"}
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide="autohide">
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt=""/>
                <strong className="me-auto">¡Agregado al carrito!</strong>
            </Toast.Header>
        </Toast>
    </div>
</>
    )
}