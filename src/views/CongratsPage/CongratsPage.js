import {Spinner} from "react-bootstrap"
import React from "react";
import { useSearchParams } from "react-router-dom";
import { getProduct } from "../../services/firebase";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
export default function CongratsPage() {

    const [searchParams, setSearchParams] = useSearchParams();
    const orderId = searchParams.get("order")
    const [loading, setLoading] = React.useState(false);
    const [productItem, setProductItem] = React.useState({});
    //Consultando la orden generada por Id
    React.useEffect(()=>{
        setLoading(true)
        getProduct("orders", orderId).then((product)=>{            
            if(product){
                setProductItem(product)
                setLoading(false)
            }
        }).catch(error =>{console.log(error)})
    },[orderId])

    return (

        <>
        
        {loading || !productItem.buyer ? <div className="loadingStyle"><div><p>Cargando</p><Spinner animation="border" /></div></div> : <OrderDetail order={productItem} />}

        </>  


        

    )
}