import React from "react"
import Item from "../Item/Item"
import {Container, Row, Col} from "react-bootstrap"
export default function ItemList({ProductList}){

    return(
        <>
            <h2>Lista de productos</h2>
            <Container fluid> 
                <Row>
                    {ProductList.map((product) => {
                                return(
                                        <Item product={product} key={product.Id}/>
                                )
                            })}
                </Row>
            </Container>
        </>
    )
}