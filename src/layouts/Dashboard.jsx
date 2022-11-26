import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CartSummary from './CartSummary'


export default function Dashboard() {
  return (
    <div>
       
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/commentdetail' element={<CartSummary/>} />
        </Routes>
      </BrowserRouter>

    
    </div>
  )
}
