import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'


import Footer from './Components/Footer/Footer'
import AllRoutes from './Components/AllRoutes'
import { ChakraProvider } from '@chakra-ui/react'


// import Furniture from './Components/FurniturePage/Furniture'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ChakraProvider>
      <Navbar/>
     <AllRoutes/>
  
      <Footer/>
      </ChakraProvider>
      
     
    </div>
  )
}

export default App
