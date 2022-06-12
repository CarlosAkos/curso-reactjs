import {Card, Button, Col} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
export default function Item({product}){
   const navigate = useNavigate()
    return(
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    Precio: {product.price}
                </Card.Text>
                <Card.Text>
                    Stock Disponible: {product.stock}
                </Card.Text>
                <Button variant="primary" onClick={()=> navigate(`/product/${product.id}`)}>Ver más</Button>
                </Card.Body>
            </Card>
        </Col>
    )
} 