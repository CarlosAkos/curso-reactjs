import {Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"

export default function OrderDetail({order}){
    return(

        
        <div className="CongratsContainer">
                    <h1>
                        ¡Muchas gracias por tu compra!
                    </h1>
                    
            <div className="orderDetail">
                <div>
                    <h3>Datos de facturación</h3>
                    <p><strong>Id de compra</strong> {order.id}</p>
                    <p><strong>Fecha de la compra</strong> {order.date}</p>
                    <p><strong>Nombre y Apellido</strong> {order.buyer.nombre + " " + order.buyer.apellido}</p>
                    <p><strong>Correo electrónico</strong> {order.buyer.mail}</p>
                    <p><strong>Nro. telefónico</strong> {order.buyer.nroTelefonico}</p>
                </div>
                
                <div>
                    <h3>Datos de la compra</h3>
                    {order.items.map((product)=>{
                        return(
                            <div key={product.id}>
                                <p>{product.title} x {product.quantity}</p>
                            </div>
                        )
                    })}
                    <h5><strong>Precio total</strong> {order.total}</h5>
                </div>
            </div>

            <NavLink to="/">
                <Button primary="primary">Volver al inicio</Button>
            </NavLink>
        </div>
    )
}