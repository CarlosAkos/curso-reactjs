import ItemCount from "../itemCount/ItemCount";

export default function ItemListContainer({greetings}){
    return(
        <>
        <h1>{greetings}</h1>
        <ItemCount Stock={5} Initial={1} />
        </>   
    )
}