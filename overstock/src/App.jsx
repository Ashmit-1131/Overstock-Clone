import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home'

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
