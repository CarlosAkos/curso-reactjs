import {NavLink} from "react-router-dom"
export default function Footer(){
    return(
        <footer className="footer bg-light p-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <NavLink to="/" className="navbar-brand">TECHNOHARDWARE</NavLink>
                    </div>

                    <div className="col">
                        <h6>Contacto</h6>
                        <ul className="list-unstyled">
                            <li>
                                <p>Av. Independencia, CABA, Argentina</p>
                            </li>
                            <li>
                                <p>hola@technohardware.com</p>
                            </li>
                            <li>
                                <p>+54 11 5555 5555</p>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <p>Copyright 2022 Technohardware todos los derechos reservados</p>
                    </div>

                </div>
            </div>

        </footer>
    )

}