import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./views/Home/home"
import Products from "./views/Products/Products"
import ProductsDetailView from "./views/ProductsDetailView/ProductsDetailView"
import Cart from "./views/Cart/Cart"
export default function AppShell(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/products" element={<Products />}/>
                <Route exact path="/products/:categoryId" element={<Products />}/>
                <Route exact path="/product/:productId" element={<ProductsDetailView />}/>
                <Route exact path="/Cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
    )
}