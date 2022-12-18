import { Routes, Route} from "react-router-dom"

import Home from "./Pages/Home"
import Account from "./LoginPage/Account"
import Products from "./Pages/Productpg.jsx"



export default function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/account" element={<Account/>}></Route>
            <Route path="/product" element={<Products/>}></Route>
          
        
           
        </Routes>
    )
}