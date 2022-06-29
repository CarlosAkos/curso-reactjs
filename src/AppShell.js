import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home/home"
import Products from "./views/Products/Products"
import ProductsDetailView from "./views/ProductsDetailView/ProductsDetailView"
import CartContext from "../src/CartContext/CartContext"
import Cart from "./views/Cart/Cart"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Checkout from "./views/Checkout/Checkout"
import PageNotFound from "./views/PageNotFound/PageNotFound"
import CongratsPage from "./views/CongratsPage/CongratsPage"
export default function AppShell(){
    return(
        <BrowserRouter>
            <CartContext>
            <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route exact path="/products" element={<Products />}/>
                        <Route exact path="/products/:categoryId" element={<Products />}/>
                        <Route exact path="/product/:productId" element={<ProductsDetailView />}/>
                        <Route exact path="/cart" element={<Cart />}/>
                        <Route exact path="/cart/checkout" element={<Checkout />}/>
                        <Route path="*" element={<PageNotFound/>}/>
                        <Route path="/congrats" element={<CongratsPage />}/>

                        
                    </Routes>
                <Footer />
            </CartContext>
        </BrowserRouter>
    )
}