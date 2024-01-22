import React, { Component } from 'react'
import logo from '../../../src/images/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-[100%] flex justify-between'>
      <div className='h-[100%] flex items-center justify-start ml-3'>
        <img src={logo} alt='logo' className='h-[80%] '></img>
        <h1 className='text-xl custom-font font-bold text-white mx-3'> MAGIC BONZAI</h1>
        <Link className='mx-2 text-white text-[15px]' to="/">Home</Link>
        <Link className='mx-2 text-white text-[15px]' to="/products">Products</Link>
        <Link className='mx-2 text-white text-[15px]' to="/about">About</Link>
      </div>

      <div className='h-[100%] flex items-center justify-end me-3'>

        <button className='button-1 bg-orange-600 text-white
         hover:bg-orange-700 hover:text-white'> <Link to="/shopping-cart"><i className="fas fa-shopping-cart"></i></Link></button>

        <button className='button-1 bg-green-600 text-white
         hover:bg-green-700 hover:text-white'> <Link to="/login"> Login </Link></button>
      </div>
    </div>
  )
}

export default Navbar;