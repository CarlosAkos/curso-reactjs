import ItemList from "../ItemListContainer/ItemList";
export default function ItemListContainer({greetings}){
    return(
        <>
        <h1>{greetings}</h1>
        <ItemList />
        </>   
    )
}