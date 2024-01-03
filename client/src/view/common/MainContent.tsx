import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import ShoppingCart from '../pages/ShoppingCart'
import ModifyCart from './ModifyCart'

export default class MainContent extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/products' Component={Products}></Route>
          <Route path='/shopping-cart' element={<ShoppingCart itemList={ModifyCart.itemsList} />}></Route>
        </Routes>
      </div>
    )
  }
}