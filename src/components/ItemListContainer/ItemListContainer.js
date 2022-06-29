import React from "react";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import {getProducts} from "../../services/firebase"
import {useNavigate} from "react-router-dom"

export default function ItemListContainer({categoryId}){

    const [productList, setProductList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    
    //Constante de redirección en caso de no encontrar el producto o categoría
    const history = useNavigate();
    
    //Petición de productos
    React.useEffect(()=>{
        setLoading(true)

        getProducts("productos", categoryId).then(
                (products)=> {
                    if(products.length === 0){
                        history("/CategoriaNoEncontradas");
                    }else{
                        setProductList(products)}
                    }).catch(error =>{console.log(error)}).finally(()=>{setLoading(false)})

    },[categoryId])

    return(
        <>
        {loading === true ? <div className="loadingStyle"><div><p>Cargando</p><Spinner animation="border" /></div></div> : <ItemList ProductList={productList}/>}
        </>   
    )
}