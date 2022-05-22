import React from "react"
import { Button } from "react-bootstrap"
export default function ItemCount ({Stock, Initial}){

// Funciones manejadoras del contador 
 const [count, setCount] = React.useState(Initial)
 const handleCountMenus = () => {
     if(count > 1){
        setCount(count - 1)
     }
 }
 const handleCountPlus = () => {
    if(count < Stock){
       setCount(count + 1)
    }
}

// Render
    return(
        <>
            <Button value="-" onClick={handleCountMenus}>-</Button>
            {count}
            <Button value="-" onClick={handleCountPlus}>+</Button>
        </>
    )
}