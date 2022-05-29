import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import {useParams} from "react-router-dom"
export default function Products(){

const { categoryId } = useParams();    
return(
        <>
            <Navbar />
            <ItemListContainer categoryId={categoryId}/>
            <Footer />
        </>
    )
}