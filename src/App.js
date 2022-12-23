import React from 'react'
import SingleProduct from './components/ShopDetail/SingleProduct/SingleProduct'
import Home from './Home/Home'
import Shopingcarddipslay from './components/ShopingCart/Shopingcarddipslay'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductComponent from './components/ShopProducts/ProductComponent/ProductComponent'
// import CheckOut from './components/CheckOut/Checkout'



const App = () => {
  return (
    <>
  <BrowserRouter>

    <Routes>
      <Route exact path='/' element ={<Home/>} />
      <Route exact path='/shop' element={<ProductComponent />}  />
      <Route exact path='/shop/:id' element={<SingleProduct />} />
      <Route exact path='/cart' element={<Shopingcarddipslay />} />
      {/* <Route exact path='/checkout' element={<CheckOut />} /> */}
    </Routes>
  </BrowserRouter>


    </>
  )
}

export default App
