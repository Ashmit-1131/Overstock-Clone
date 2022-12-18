import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './Components/LoginPage/Redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
   <Provider store={store}>
   <BrowserRouter>
      <App />
   </BrowserRouter>

   </Provider>
    
</ChakraProvider>
 
)
