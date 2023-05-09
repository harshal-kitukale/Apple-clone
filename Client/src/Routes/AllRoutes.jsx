import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import { SingleProduct } from '../harshal/SingleProduct'
import { Home } from '../Abhishek/Home'
import Products from '../Manju/Products'
import Login from '../Utkarsh/Authorizations/Login'
import Signup from '../Utkarsh/Authorizations/Signup'
import Payment from '../Arun/Cart/Payment'
import CheckoutPage from '../Arun/Cart/CheckoutPage'
import Cart from '../harshal/Cart'
import Store from '../Manju/Store'

const AllRoutes = () => {
  return (
    <Routes>

      <Route path={'/singleProduct/:id'} element={<SingleProduct/>}/>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/products'} element={<Store/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/signup'} element={<Signup/>}/>
      <Route path={'/payment'} element={<Payment/>}/>
      <Route path={'/checkout'} element={<CheckoutPage/>} />
      <Route path={'/cart'} element={<Cart/>}/>

    </Routes>
  )
}

export default AllRoutes