import React from 'react'
import hero_img1 from '../assets/hero1.png'
import hero_img2 from '../assets/hero2.png'
import hero_img3 from '../assets/hero3.png'



const Hero = () => {
  return (
    <div className=' hero pb-5 w-full flex flex-col items-center  '>
      <div className=' flex justify-center  items-center gap-4 w-full mt-65 md:mt-16'>
        <div className='flex'>
          <img src={hero_img1} alt="" className=' w-45 h-45 md:w-145 md:h-145 object-cover -ml-3 md:mt-12 rounded-[50%] border-3 md:border-8 border-white'/>

          <img src={hero_img2} alt="" className=' w-35 h-35 md:w-107 md:h-107 object-cover -ml-5 md:-ml-8  md:mt-46 mt-17 rounded-[50%] border-3 md:border-8 border-white'/>

          <img src={hero_img3} alt="" className=' w-25 h-25 md:w-80 md:h-80 object-cover mt-30 -ml-4  md:-ml-10  md:mt-78 rounded-[50%] border-3 md:border-8 border-white'/>
        </div>

        <div className='max-w-1/2 mt-12'>
          <h1 className=' text-2xl md:text-6xl font-bold text-rose-600 -mt-80 leading-tight -ml-20 md:-ml-4'>DELICIOUS MEAL</h1>
          <p className='text-lg font-semibold text-gray-800 -ml-20 md:-ml-4 pr-10'>Choose from delicious food at affordable prices. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
