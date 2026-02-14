import React, { useContext, useEffect, useState } from 'react'
import { FaCartPlus, FaRegUser, FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import logoFoodFlvr from '../assets/logo-foodflv.png'

const Navbar = () => {
  const { quantity } = useContext(ShopContext)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${isScrolled ? "bg-white text-black shadow-md shadow-gray-300 py-2" : "bg-transparent"} 
      px-6 md:px-24 flex justify-between items-center`}>

      {/* Logo */}
      <div className='flex items-center justify-center'>
        <Link to="/"><img src={logoFoodFlvr} alt="FoodFlvr Logo" className='py-2 h-17 w-40' /></Link>
      </div>

      {/* Desktop Menu (hidden on mobile) */}
      <div className='hidden md:block'>
        <ul className='flex space-x-6 text-lg font-semibold uppercase'>
          <li><NavLink to='/' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>Home</NavLink></li>
          <li><NavLink to='/shopfoods' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>Foods</NavLink></li>
          <li><NavLink to='/new-taste' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>New Tasty</NavLink></li>
          <li><NavLink to='/contact' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>Contact</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>About</NavLink></li>
        </ul>
      </div>

      {/* Cart + User (always visible) */}
      <div className='flex items-center space-x-6'>
        <Link to='/cart' className='relative'>
          <FaCartPlus className='text-2xl cursor-pointer' />
          {quantity > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full'>
              {quantity}
            </span>
          )}
        </Link>
        <FaRegUser className='text-2xl cursor-pointer' />

        {/* Hamburger icon (only on mobile) */}
        <div onClick={toggleMenu} className='md:hidden text-2xl cursor-pointer'>
          <RiMenu3Fill />
        </div>
      </div>

      {/* Mobile Menu (only on mobile) */}
      <div className={`fixed inset-0 flex flex-col items-center justify-center gap-8 text-lg pt-20 md:hidden text-white bg-black/83 transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div onClick={toggleMenu} className='absolute top-5 right-5 text-2xl cursor-pointer'>
          <FaTimes />
        </div>

        <NavLink to="/cart" onClick={toggleMenu} className="cursor-pointer relative">
          <FaCartPlus className='text-2xl' />
          {quantity > 0 && (
            <sup className='absolute top-0 -right-4 bg-amber-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs'>
              {quantity}
            </sup>
          )}
        </NavLink>

        <ul onClick={toggleMenu} className='flex flex-col items-center gap-6 text-lg font-semibold uppercase'>
          <li><NavLink to='/' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>Home</NavLink></li>
          <li><NavLink to='/shopfoods' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>Foods</NavLink></li>
          <li><NavLink to='/new-taste' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>New Tasty</NavLink></li>
          <li><NavLink to='/contact' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>Contact</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => isActive ? "text-rose-600 font-medium underline" : "hover:text-rose-600"}>About</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
