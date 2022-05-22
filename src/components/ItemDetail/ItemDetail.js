import ItemCount from "../itemCount/ItemCount"
import { Button } from "react-bootstrap"
export default function ItemDetail({ProductItem}){
    console.log(ProductItem)
    return(
        <div className="GridProductContainer">
            <div className="ItemGrid1">
                <img src={ProductItem.Img}/>
            </div>
            <div className="ItemGrid2">
                <div>
                    <h1>{ProductItem.Title}</h1>
                    <p>Stock Disponible: {ProductItem.Stock}</p>
                    <p>${ProductItem.Price}</p>
                    <ItemCount Stock={ProductItem.Stock} Initial={1} /><br />
                    <Button>Comprar</Button>
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