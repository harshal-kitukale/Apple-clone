import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import { SingleProduct } from '../harshal/SingleProduct'
import { Home } from '../Abhishek/Home'
import Login from '../Utkarsh/Authorizations/Login'
import Signup from '../Utkarsh/Authorizations/Signup'
import Payment from '../Arun/Payment'
import CheckoutPage from '../Arun/CheckoutPage'
import Cart from '../harshal/Cart'
import Generic from '../Utkarsh/UtkarshIpad/Genreric'
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
      <Route path={'/category/:category'} element={<Generic/>}/>


    </Routes>
  )
}

export default AllRoutes