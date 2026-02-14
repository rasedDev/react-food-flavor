import React from 'react'
import materialsImg1 from "../assets/contactimg.png";
import materialsImg2 from "../assets/aboutimgfd.png";
import materialsImg3 from "../assets/myHomeimg-shop.jpg";
import { FaRegHandPointRight } from "react-icons/fa";




const Homematerial = () => {
  return (
    <section className="mx-2 md:mx-24 mt-28">
  <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 mx-auto">
    <div className="md:w-1/2">
      <h2 className="text-4xl font-bold mb-4">
        We are very serious about the quality of our food
      </h2>
      
      <div className="mb-5 text-left space-y-4 font-semibold ">
        <p className='flex gap-2 items-center'><FaRegHandPointRight />Quality is our commitment</p>
        <p className='flex gap-2 items-center'><FaRegHandPointRight />Not in taste, but in meaning</p>
        <p className='flex gap-2 items-center'><FaRegHandPointRight />Food means no compromise</p>
        <p className='flex gap-2 items-start'><FaRegHandPointRight className='mt-1 text-xl'/>Taste of trust, commitment to quality</p>
        <p className='flex gap-2 items-center'><FaRegHandPointRight />Pure quality in every particle</p>
        <p className='flex gap-2 items-start'><FaRegHandPointRight className='mt-1 text-xl' />No compromise on quality, that’s our core</p>
      </div>
    </div>

    <div className="md:w-4/3 grid grid-cols-2 md:grid-cols-3 gap-6 items-end">
      <div className="flex flex-col gap-3 items-center">
        <img src={materialsImg1} alt="" className=" h-27 w-40 md:h-60 md:w-100 rounded-lg"/>
        <img src={materialsImg2} alt="" className=" h-27 w-40 md:h-60 md:w-100 rounded-lg"/>
      </div>
      <div className="md:col-span-2 col-span-1">
        <img src={materialsImg3} alt="" className="w-full h-65 md:h-150 rounded-lg"/>
      </div>
    </div>
  </div>
</section>

  )
}

export default Homematerial
