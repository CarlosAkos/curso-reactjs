import React from "react";
import ItemList from "../ItemList/ItemList";
import Data from "../../Data/data.json"
export default function ItemListContainer({categoryId}){
    
    const [ProductList, setProductList] = React.useState([]);
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
        .then((res)=>{
         if(categoryId){
            setProductList(res.filter(item => item.Category === categoryId))
         }else{
            setProductList(res)
         }   
        })
        .catch((err)=>console.log(err))

    },[categoryId])

console.log("desde Item container", categoryId)
console.log(ProductList)
    return(
        <>
        <ItemList ProductList={ProductList}/>
        </>   
    )
}