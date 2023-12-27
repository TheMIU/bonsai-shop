import React, { Component } from 'react'
import logo from '../../../src/images/logo.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className='bg-slate-700 h-[100%] flex justify-between'>
        <div className='h-[100%] flex items-center justify-start ml-3'>
          <img src={logo} alt='logo' className='h-[80%] '></img>
          <h1 className='text-xl font-bold text-white ml-3'> Magic Bonsai</h1>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
        </div>

        <div className='h-[100%] flex items-center justify-end me-3'>
          <button className='button-1 bg-green-600 text-slate-900
           hover:bg-green-700 hover:text-white'>Login</button>
          <button className='button-1 bg-green-600 text-slate-900
           hover:bg-green-700 hover:text-white'>Sign up</button>
        </div>
      </div>
    )
  }
}
