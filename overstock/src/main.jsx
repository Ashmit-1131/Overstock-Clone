import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ChakraBaseProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraBaseProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ChakraBaseProvider>
  
    
  
)
