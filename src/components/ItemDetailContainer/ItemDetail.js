import ItemCount from "../itemCount/ItemCount"
export default function ItemDetail(){
    return(
        <div className="GridProductContainer">
            <div className="ItemGrid1">
                <img src="/images/product-corei3-intel.jpg"/>
            </div>
            <div className="ItemGrid2">
                <div>
                    <h1>Título del producto</h1>
                    <p>Stock Disponible:</p>
                    <p>$55.000</p>
                    <ItemCount Stock={2} Initial={1} /><br />
                    <button className="PrimaryButton">Comprar</button>
                </div>
            </div>
            <div className="ItemGrid3">
                <div>
                    <h2>Caracteristicas principales</h2>
                    <ul>
                        <li>Caracteristica 1</li>
                        <li>Caracteristica 2</li>
                        <li>Caracteristica 3</li>
                    </ul>
                </div>
                <div>
                    <h2>Información del producto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}