export default function Footer(){
    return(
        <footer className="bg-light p-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <a className="navbar-brand" href="#">TECHNOHARDWARE</a>
                    </div>

                    <div className="col">
                        <h6>Contenido</h6>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="tertiary-link">Politicas de Privacidad</a>
                            </li>
                            <li>
                                <a href="#" className="tertiary-link">Politicas de envío</a>
                            </li>
                            <li>
                                <a href="#" className="tertiary-link">Contáctanos</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <p>Copyright 2022 "nombre de la marca" todos los derechos reservados</p>
                    </div>

                </div>
            </div>

        </footer>
    )

}