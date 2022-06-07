import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"
import {useParams} from "react-router-dom"
export default function ProductsDetailView(){
    
    const { productId } = useParams();

return(

            <ItemDetailContainer  productId={productId}/>

    )
}