import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom"
import { getProduct } from "../../services/firebase";
import { Spinner } from "react-bootstrap";
export default function ItemDetailContainer(){
    
    const { productId } = useParams();

    const [productItem, setProductItem] = React.useState({});
    const [loading, setLoading] = React.useState(false);


    React.useEffect(()=>{
        setLoading(true)
        getProduct("productos", productId).then((product)=> {setProductItem(product)}).catch(error =>{console.log(error)}).finally(()=>{setLoading(false)})
    },[productId])


    return(
        <>
        {loading === true ? <div className="loadingStyle"><div><p>Cargando</p><Spinner animation="border" /></div></div> : <ItemDetail productItem={productItem} />}
        
        </>   
    )
}