import React from "react"
import { products } from "../../Data/Products"
import Item from "./Item"
export default function ItemList(){
    const task = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products);
        }, 3000);
    })

    task.then((result)=>{
        console.log(products)
    }).catch((err)=>{
        console.log("error en consola")
    })

    return(
        <div className="ItemListContainer">
        {products.map((product) => {
            return(
                <Item product={product} key={product.Id}/>
            )
        })}
        </div>
    )
}