import React from 'react'
import hero_img1 from '../assets/hero1.png'
import hero_img2 from '../assets/hero2.png'
import hero_img3 from '../assets/hero3.png'



const Hero = () => {
  return (
    <div className=' hero pb-5 w-full flex flex-col items-center  '>
      <div className=' flex justify-between  items-center gap-4 w-full mt-16'>
        <div className='flex'>
          <img src={hero_img1} alt="" className=' w-145 h-145 object-cover -ml-6 mt-12 rounded-[50%] border-8 border-white'/>
          <img src={hero_img2} alt="" className=' w-107 h-107 object-cover -ml-8  mt-46 rounded-[50%] border-8 border-white'/>
          <img src={hero_img3} alt="" className=' w-80 h-80 object-cover -ml-10 mt-78 rounded-[50%] border-8 border-white'/>
        </div>

        <div className='max-w-1/2 mt-12'>
          <h1 className=' text-6xl font-bold text-rose-600 -mt-80 leading-tight -ml-4'>DELICIOUS MEAL</h1>
          <p className='text-lg font-semibold text-gray-800 -ml-4'>Choose from delicious food at affordable prices. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
