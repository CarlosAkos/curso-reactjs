import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
export default function Home(){
    return(
        <>
            <Navbar />
            <img src="/images/banner-asus.jpg" style= {{width:"100%"}}/>
            <ItemListContainer />
            <Footer />
        </>
    )
}