import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'


import Productpg from './Components/Pages/Productpg'
import SideDrower from './Components/Pages/sideDrower'

import ProductPg from './Components/Pages/Productpg'
import Footer from './Components/Footer/Footer'

import Dropdown from './Components/FurniturePage/Dropdown'
import AllRoutes from './Components/AllRoutes'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Components/Pages/Home'


// import Furniture from './Components/FurniturePage/Furniture'



function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">

      {/* <Navbar/> */}
      <Dropdown/>
      {/* <Home/> */}
      {/* <Furniture/> */}

    </div>
  )
}

export default App
