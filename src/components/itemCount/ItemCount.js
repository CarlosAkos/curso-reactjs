import React from "react"
import { Button } from "react-bootstrap"
export default function ItemCount ({handleCountMenus, handleCountPlus, count}){

// ACA ESTABA LA FUNCIONES MANEJADORAS DEL CONTADOR 
//  const [count, setCount] = React.useState(Initial)
//  const handleCountMenus = () => {
//      if(count > 1){
//         setCount(count - 1)
//      }
//  }
//  const handleCountPlus = () => {
//     if(count < Stock){
//        setCount(count + 1)
//     }
// }

// Render
    return(
        <>
            <Button style={{marginRight: "10px"}} value="-" onClick={handleCountMenus}>-</Button>
            <span>{count}</span>
            <Button style={{marginLeft: "10px"}} value="-" onClick={handleCountPlus}>+</Button>
        </>
    )
}