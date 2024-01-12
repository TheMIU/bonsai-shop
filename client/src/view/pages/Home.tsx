import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className=" p-10 w-[400px] text-white">
          <h1 className="text-2xl font-bold mb-4 custom-font">Welcome to Our Bonsai Shop</h1>
          <p>Discover a wide range of beautiful bonsai trees and items for your collection.</p>
          <div className="w-[100px] pt-4" >
            <button className='button-2 bg-green-600 text-white
           hover:bg-green-700 hover:text-white'> <Link to="/products"> Discover <i className="fas fa-leaf"></i></Link></button>
          </div>
        </div>
      </div>
    );
  }
}
