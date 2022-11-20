import React from 'react'
import CartSummary from './CartSummary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommentDetail from '../pages/CommentDetail'


export default function Dashboard() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<CartSummary/>} />
          <Route exact path='/commentdetail' element={<CommentDetail/>} />
        </Routes>
      </BrowserRouter>

    
    </div>
  )
}
