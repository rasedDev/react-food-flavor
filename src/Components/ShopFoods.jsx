import React from 'react'
import {Link, NavLink } from "react-router-dom";
import shopfoodimg from "../assets/homeimg-shop.jpg";
import ProductList from './ProductList';


const ShopFoods = () => {
  return (
    <section className=' min-h-screen  mx-auto '>
          <div className=' bg-center bg-cover mt-18  h-90 py-40 p-4  bg-gray-500 text-gray-600 ' style={{backgroundImage: `Url(${shopfoodimg})`}}> </div>
          <div>
            <div>
              <ProductList />
            </div>
          </div>
    
        </section>
  )
}

export default ShopFoods
