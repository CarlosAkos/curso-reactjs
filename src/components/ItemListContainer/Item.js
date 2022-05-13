export default function Item({product}){

    return(
        <div className="CardItem">
            <img src={product.Img} />
            <div className="cardInfo">
                <p>{product.Title}</p>
                <p>Precio: {product.Price}</p>
                <p>Stock Disponible: {product.Stock}</p>
                <button>Ver más</button>
            </div>
        </div>
    )
} 