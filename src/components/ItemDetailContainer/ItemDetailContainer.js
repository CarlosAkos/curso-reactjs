import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Data from "../../Data/data.json"
export default function ItemListContainer({productId}){
    
    const [ProductItem, setProductItem] = React.useState({});
    const PromiseCoder = new Promise((resolve, reject) =>{
        setTimeout(() => {
            let condition = true
            // if(condition){
            //     resolve(Data)
            // }else{
            //     reject("Error al traer información")
            // }
            condition ? resolve(Data) : reject("Error al traer información") 
        }, 3000);
    })


    React.useEffect(()=>{
        PromiseCoder
        .then((res)=>
            setProductItem(res.find(item => item.Id === +productId))
         )
        .catch((err)=>console.log(err))

    },[productId])



    // React.useEffect(()=>{
    //     PromiseCoder
    //     .then((res)=>setProductList(res))
    //     .catch((err)=>console.log(err))

    // },[])

    // console.log(ProductList)
    return(
        <>
        <ItemDetail ProductItem={ProductItem} />
        </>   
    )
}