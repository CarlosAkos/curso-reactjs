import {Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"
export default function PageNotFound() {

    return (
        <div className="NotFoundContainer">
            <h1>
                Página no encontrada
            </h1>
            <p>
                No encontramos la página que buscas.
            </p>
            <NavLink to="/">
                <Button primary="primary">Volver al inicio</Button>
            </NavLink>
        </div>

    )
}