import React, { useContext, useEffect, useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from './ShopContext';



  const Navbar = () => {
  const {quantity} = useContext(ShopContext)

  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, SetIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      SetIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white text-black shadow-md shadow-gray-300 py-4" : " bg-transparent py-6"
    } px-24 flex justify-between items-center`}>
      <div className=' text-2xl font-bold text-black cursor-pointer'>FoodFlavor</div>
      <div>
        
        <ul className=' flex space-x-6 text-lg font-semibold uppercase'>
          <li>
            <NavLink to='/'  className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/shopfoods' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>Foods</NavLink>
          </li>
          <li>
            <NavLink to='/new-taste' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>New Taste</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>About</NavLink>
          </li>
        </ul>
      </div>


      <div className='flex items-center space-x-6'>

        <Link to='/cart' className=' relative'>
          <FaCartPlus className='text-2xl cursor-pointer'/>
          {quantity > 0 && (
            <span className=' absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full'>{quantity}</span>
          )}
        </Link>
        
        <FaRegUser className='text-2xl cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar
