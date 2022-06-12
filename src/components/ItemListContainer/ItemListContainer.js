import React from "react";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import {getProducts} from "../../services/firebase"

export default function ItemListContainer({categoryId}){

    const [productList, setProductList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        setLoading(true)

        getProducts("productos", categoryId).then(
                (products)=> setProductList(products)
            ).catch(error =>{console.log(error)}).finally(()=>{setLoading(false)})

    },[categoryId])

    console.log(productList)

    return(
        <>
        {loading === true ? <div className="loadingStyle"><div><p>Cargando</p><Spinner animation="border" /></div></div> : <ItemList ProductList={productList}/>}
        </>   
    )
}