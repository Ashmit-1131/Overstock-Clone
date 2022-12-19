import { Routes, Route} from "react-router-dom"

import Home from "./Pages/Home";
import Account from "./LoginPage2/Account";
import Products from "./Pages/Productpg.jsx";
import Cartpg from './Pages/Cartpg';
import Furniture from "../Components/FurniturePage/Furniture";
import ProductDetail from "./Pages/Productdetail"


 function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/account" element={<Account/>}></Route>
            <Route path="/product_page" element={<Products/>}></Route>
            <Route path="/product_page/:id" element={<ProductDetail/>}></Route>
            <Route path="/cart" element={<Cartpg/>}></Route>
            <Route path="/furniture" element={<Furniture/>}></Route> 
        </Routes>
    )
}

export default AllRoutes