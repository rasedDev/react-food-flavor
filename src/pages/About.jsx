import React from 'react'
import aboutimge from "../assets/aboutimgfd.png";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react"



const About = () => {
  return (
    <motion.div className='w-full min-h-screen  mx-auto'
    initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <div className=' bg-center bg-cover mt-16  h-90 py-40 p-4  bg-gray-500 text-gray-600 ' style={{backgroundImage: `Url(${aboutimge})`}}> </div>

      <h3 className='text-rose-600'></h3>
      <h2 className=' text-3xl items-center mt-20 justify-center text-center ml-5 mr-5 font-semibold mb-4 border-b border-gray-300 '> <span className=' text-lg text-rose-600'>WHO WE ARE</span><br /> About Us Food-Flavor</h2>
      <div className=' flex flex-col md:px-10 md:flex-row mt-5 px-5 gap-40 md:mx-30'>
        <div className=' flex-2'>
            <p className='  mb-2 font-semibold  mt-2'>Welcome to our food haven, <NavLink to= "/" className=" text-blue-600 hover:text-red-400"> www.foodflavor.com </NavLink>  where flavor meets freshness. We serve delicious meals crafted with love, using the finest ingredients. From hearty breakfasts to gourmet dinners, every bite tells a story. Explore our menu, savor unique tastes, and enjoy a dining experience that celebrates passion for food.</p>

            <p className=' font-semibold mt-4'>Currently, We are operating over 170  bakery outlets in major cities like Dhaka, Chittagong, and Sylhet of Bangladesh. Serving local market with good reputation Food Flavor Company Limited is also exporting different cookies and rusks in Europe, USA, Middle East, and some Asian Countries.</p>
            
            <p className=' font-semibold mt-4'>Diversity and equity are at the heart of our values and growth strategy. We focus on creating a healthy work environment.</p>
            
        </div>
        <div className=' flex-1'>
          <p className=' font-bold mt-3 text-rose-600'>Food-Flavor</p>
          <p className='mb-5'>MADE FRESH EVERY DAY</p>
          <p className=' font-bold mt-3 text-rose-600'>Our Mission</p>
          <p className=' mb-5'>Our mission is to provide global quality food in a very hospitable environment. Entertaining our customers in a very friendly atmosphere with efficient service is the key to our success</p>
          <p className=' font-bold mt-3 text-rose-600'>Our Vision</p>
          <p className=' mb-5'>Our goal is to become number one Food Flavor company in Bangladesh. We want to lead in this sector.</p>
          <p className=' font-bold text-rose-600'>Our Commitment</p>
          <p className=' mt-1'>Quality <br />
          Job Satisfaction <br className='mt-1' />
          Productivity <br className=' mt-1'/>
          Continuous Improvement <br  className=' mt-1 mb-1'/>
          Growth and Prosperity</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About;