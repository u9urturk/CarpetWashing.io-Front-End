import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import CommentAdd from '../pages/CommentAdd'
import Home from '../pages/Home'
import CartSummary from './CartSummary'


export default function Dashboard() {
  return (
    <div>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/commentdetail' element={<CartSummary />} />
            <Route exact path='/commentAdd' element={<CommentAdd />} />
          </Routes>
        </BrowserRouter>
      </Container>



    </div>
  )
}
