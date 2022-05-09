import React from "react"
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
            <input type="button" value="-" onClick={handleCountMenus} />
            {count}
            <input type="button" value="+" onClick={handleCountPlus} />
        </>
    )
}