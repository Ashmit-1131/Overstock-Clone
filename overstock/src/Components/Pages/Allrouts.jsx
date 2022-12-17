import React from 'react';
import {Route,Routes} from 'react-router-dom';

import Home from './Home';
import ProductPg from './Productpg';
import Cart from './Cartpg'


const Router = () => {
  return (
        <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/product_page'  element={<ProductPg/>}/>
            <Route path='/cart'  element={<Cart/>}/>
        </Routes>
  )
}

export default Router
