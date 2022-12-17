import React from 'react'
import ReactDOM from 'react-dom/client';

import {Provider} from 'react-redux';
import {store} from './redux/store'

import App from './App'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
   <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </Provider>
</ChakraProvider>
 
)
