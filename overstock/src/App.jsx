import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar2/Navbar'
import AllRoutes from './Components/AllRoutes'
import Footer from './Components/Footer/Footer'


import Navbar from './Components/Navbar2/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <Navbar/>

      <AllRoutes/>
      <Footer/>


    </div>
  )
}

export default App
