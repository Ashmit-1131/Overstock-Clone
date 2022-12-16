import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home'
import Productpg from './Components/Pages/Productpg'
import SideDrower from './Components/Pages/sideDrower'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Navbar/> */}
      {/* <Home/> */}
      <Productpg/> 
      {/* <SideDrower/> */}
    </div>
  )
}

export default App
