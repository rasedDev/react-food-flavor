import React, { useEffect, useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";



const Navbar = () => {
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
          <li className={`cursor-pointer transition ${isScrolled ? ' hover:text-orange-500' : 'hover:text-white'}`}>Home</li>
          <li className={`cursor-pointer transition ${isScrolled ? ' hover:text-orange-500' : 'hover:text-white'}`}>Foods</li>
          <li className={`cursor-pointer transition ${isScrolled ? ' hover:text-orange-500' : 'hover:text-white'}`}>New Taste</li> 
          <li className={`cursor-pointer transition ${isScrolled ? ' hover:text-orange-500' : 'hover:text-white'}`}>Contact</li>
          <li className={`cursor-pointer transition ${isScrolled ? ' hover:text-orange-500' : 'hover:text-white'}`}>About</li>
        </ul>
      </div>


      <div className='flex items-center space-x-6'>
        <FaCartPlus className='text-2xl cursor-pointer'/>
        <FaRegUser className='text-2xl cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar
