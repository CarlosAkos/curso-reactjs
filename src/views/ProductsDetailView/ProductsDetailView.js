import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"
import {useParams} from "react-router-dom"
export default function ProductsDetailView(){
    
    const { productId } = useParams();

return(
        <>
            <Navbar />
            <ItemDetailContainer  productId={productId}/>
            <Footer />
        </>
    )
}