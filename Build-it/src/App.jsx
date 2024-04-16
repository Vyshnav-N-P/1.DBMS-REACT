import React from 'react';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Brands from './Pages/Brands';
import Loginpage from './Pages/Loginpage';
import Registerpage from './Pages/registerpage';
import { Route,Routes } from 'react-router-dom';
import Productpage from './Pages/Products';
import Cart from './Pages/Cart';
import Detail from './Pages/Detail';
import Filtering from './Pages/Filtering';
import Checkout from './Pages/checkout';

export default function App(){  
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/brands' element={<Brands/>}/>
      <Route path='/products' element={<Productpage /> }/>
      <Route path='/login-page' element={<Loginpage />}/>
      <Route path='/register-page' element={<Registerpage />}/>
      <Route path='/cart-page/checkout' element={<Checkout />}/>
      <Route path='/cart-page/:id' element={<Cart />}/>
      <Route path='/products/:category' element={<Filtering />}/>
      <Route path='/brands/:brandname' element={<Filtering />}/>
      <Route path='/products/:category/:id' element={<Detail />}/>
      <Route path='/brands/:brandname/:id' element={<Detail />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}
