import React from 'react';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Brands from './Pages/Brands';
import Loginpage from './Pages/Loginpage';
import Registerpage from './Pages/registerpage';
import { Route,Routes } from 'react-router-dom';
import Productpage from './Pages/Products';
import Cart from './Pages/Cart';
import Categoryfilter from './Pages/Categoryfilter';
import Detail from './Pages/Detail';

export default function App(){
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/brands' element={<Brands/>}/>
      <Route path='/products' element={<Productpage /> }/>
      <Route path='/login-page' element={<Loginpage />}/>
      <Route path='/register-page' element={<Registerpage />}/>
      <Route path='/cart-page' element={<Cart />}/>
      <Route path='/products/:category' element={<Categoryfilter />}/>
      <Route path='/products/:category/:id' element={<Detail />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}
