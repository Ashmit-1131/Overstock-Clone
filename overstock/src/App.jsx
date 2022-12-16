import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home'
import Furniture from './Components/FurniturePage/Furniture'

import Productpg from './Components/Pages/Productpg'
import SideDrower from './Components/Pages/sideDrower'


import Footer from './Components/Footer/Footer'


// import Furniture from './Components/FurniturePage/Furniture'



function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">

      
      <Navbar/>
      <Home/>
    
  
      <Footer/>
     


    </div>
  )
}

export default App
