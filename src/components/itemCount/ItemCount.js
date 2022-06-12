import React from "react"
import { Button } from "react-bootstrap"
export default function ItemCount ({max, initial, haveButton=false, buttonName="", handleOnClick}){

 // Declaración de constantes para el contador
 const [count, setCount] = React.useState(initial)


// Funciones manejadoras del contador
const onDecrease = () => {
    if(count > 1){
       setCount(count - 1)
    }
}
const onAdd = () => {
   if(count < max){
      setCount(count + 1)
   }
}


// Render
    return(
        <div>
            <div>
                <Button style={{marginRight: "10px"}} value="-" onClick={onDecrease}>-</Button>
                <span>{count}</span>
                <Button style={{marginLeft: "10px"}} value="-" onClick={onAdd}>+</Button>
            </div>
            <div>
                {haveButton ? 
                <Button style={{marginTop: "20px"}} onClick={()=>handleOnClick(count)}>{buttonName}</Button> : <></>    
                }   
            </div>
        </div>
    )
}