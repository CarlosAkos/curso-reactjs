import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import {useParams} from "react-router-dom"
export default function Products(){

const { categoryId } = useParams();    
return(
            <ItemListContainer categoryId={categoryId}/>
    )
}