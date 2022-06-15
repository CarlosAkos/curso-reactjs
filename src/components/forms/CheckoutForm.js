import {Form, Button} from "react-bootstrap"
import React from "react"
import { CartContext } from "../../CartContext/CartContext"
import { SendOrder } from "../../services/firebase"
export default function CheckoutForm(){
    const {cart, totalPrice} = React.useContext(CartContext) 
    const [data, setData] = React.useState()  

    const cartDetail = cart.map((item)=>{
        const obj = {};
        obj.title = item.title;
        obj.price = item.price;
        obj.quantity = item.quantity;
        obj.id = item.id;
        return obj;
    })    
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
      }

    const [orderId, setOrderId] = React.useState()
    const handleSubmit = (event) => {
        event.preventDefault();
        SendOrder(data, cartDetail, totalPrice, cart)
        .then((idRef) => {
            setOrderId(idRef)
        })
      }

    return(
        <div>
            <h3>Esto será un formulario</h3>
            <Form onSubmit={handleSubmit}>
                 <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name="nombre" type="tex" placeholder="Ingresa tu nombre" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control name="apellido" type="tex" placeholder="Ingresa tu apellido" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Número telefónico</Form.Label>
                    <Form.Control name="nro. telefonico" type="number" placeholder="Ingresa tu número telefónico" onChange={handleChange} />
                    <Form.Text className="text-muted">No compartiremos esta información con nadie más.</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control name="mail" type="email" placeholder="Ingresa tu correo electrónico" onChange={handleChange} />
                    <Form.Text className="text-muted">No compartiremos esta información con nadie más.</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">Continuar</Button>
            </Form>
            {orderId ? <p>este es tu numero de orden: {orderId}</p> : <></>}
        </div>
    )

}