import {Form, Button} from "react-bootstrap"
import React from "react"
import {CartContext} from "../../CartContext/CartContext"
import {SendOrder} from "../../services/firebase"
import { useNavigate } from "react-router-dom"
export default function CheckoutForm() {
    const {cart, totalPrice, deleteAll} = React.useContext(CartContext)
    const [data, setData] = React.useState({})
    const [errors, setErrors] = React.useState({})
    const [orderId, setOrderId] = React.useState()
    //constante para redirección
    const history = useNavigate();
    //Función para destructurar y mostrar el detalle del carrito
    const cartDetail = cart.map((item) => {
        const obj = {};
        obj.title = item.title;
        obj.price = item.price;
        obj.quantity = item.quantity;
        obj.id = item.id;
        return obj;
    })
    //Función manejadora para los campos del formulario
    const handleChange = (event) => {
        const {name, value} = event.target;
        setData({
            ...data,
            [name]: value
        })

        if(!!errors){
            setErrors({
                ...errors,
                [name]: ""
            })
        }
    }
    //Función para validar los campos
    const validateForm = () =>{

        const{nombre, apellido, nroTelefonico, mail, mailAuth  } = data
        const newErrors = {}

        if(!nombre || nombre === " ") newErrors.nombre = "Por favor ingresa tu nombre"
        if(!apellido || apellido === " ") newErrors.apellido = "Por favor ingresa tu apellido"
        if(!nroTelefonico || nroTelefonico === " ") newErrors.nroTelefonico = "Por favor ingresa un nro. de teléfono válido"
        if(!mail || mail === " ") newErrors.mail = "Por favor ingresa un mail válido"
        if(!mailAuth || mailAuth === " ") newErrors.mailAuth = "Por favor ingresa un mail válido"
        else if(mailAuth !== mail) newErrors.mailAuth = "Verifica que tu correo sea igual en ambos campos."

        return newErrors
    }
    //Función manejadora del evento del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validateForm()

        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors)
        }else{
            delete data.mailAuth
            SendOrder(data, cartDetail, totalPrice, cart).then(
                (idRef) => {
                setOrderId(idRef)
                history(`/congrats?order=${idRef}`);
            }).finally(deleteAll)
        }
    }

    return (
        <div>
            <h3>Datos de facturación</h3>
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label >Nombre</Form.Label>
                    <Form.Control
                        required
                        name="nombre"
                        type="text"
                        placeholder="Ingresa tu nombre"
                        onChange={handleChange}
                        value = {data.nombre}
                        isInvalid={!!errors.nombre}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.nombre}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        required
                        name="apellido"
                        type="text"
                        placeholder="Ingresa tu apellido"
                        onChange={handleChange}
                        isInvalid={!!errors.apellido}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.apellido}
                    </Form.Control.Feedback>
                </Form.Group>
               
               <Form.Group className="mb-3">
                    <Form.Label>Número telefónico</Form.Label>
                    <Form.Control
                        required
                        name="nroTelefonico"
                        type="number"
                        placeholder="Ingresa tu número telefónico"
                        onChange={handleChange}
                        isInvalid={!!errors.nroTelefonico}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.nroTelefonico}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                        required
                        name="mail"
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                        onChange={handleChange}
                        isInvalid={!!errors.mail}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.mail}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>Verificación de Correo Electrónico</Form.Label>
                    <Form.Control
                        required
                        name="mailAuth"
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                        onChange={handleChange}
                        isInvalid={!!errors.mailAuth}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.mailAuth}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Button variant="primary" type="submit">Finalizar Compra</Button>
            </Form>
            {
                orderId
                    ? <p>este es tu numero de orden: {orderId}</p>
                    : <></>
            }
        </div>
    )

}