import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'


import Productpg from './Components/Pages/Productpg'
import SideDrower from './Components/Pages/sideDrower'

import ProductPg from './Components/Pages/Productpg'
import Footer from './Components/Footer/Footer'

import Cart from './Components/Pages/Cartpg'
import Dropdown from './Components/FurniturePage/Dropdown'
import AllRoutes from './Components/AllRoutes'
import Home from './Components/Pages/Home'



// import Furniture from './Components/FurniturePage/Furniture'
import Router from './Components/Pages/Allrouts'
import ProductDetail from './Components/Pages/Productdetail'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      {/* <Navbar/>   */}
      {/* <Router/> */}
    {/* <Home/>  */}
     {/* <ProductPg/>   */}
     <ProductDetail/>

    </div>
  )
}

export default App
