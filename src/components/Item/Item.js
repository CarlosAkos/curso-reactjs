import {Card, Button, Row, Col} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
export default function Item({product}){
   const navigate = useNavigate()
    return(
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.Img} />
                <Card.Body>
                <Card.Title>{product.Title}</Card.Title>
                <Card.Text>
                    Precio: {product.Price}
                </Card.Text>
                <Card.Text>
                    Stock Disponible: {product.Stock}
                </Card.Text>
                <Button variant="primary" onClick={()=> navigate(`/product/${product.Id}`)}>Ver más</Button>
                </Card.Body>
            </Card>
        </Col>
    )
} 