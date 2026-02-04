import React from 'react'
import materialsImg1 from "../assets/contactimg.png";
import materialsImg2 from "../assets/aboutimgfd.png";
import materialsImg3 from "../assets/myHomeimg-shop.jpg";




const Homematerial = () => {
  return (
    <section className=' mx-2 md:mx-25 mt-28'>

      
      <div className=" md:w-6/5 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-6   mx-auto">
        <div >
      
          <h2 className=" text-4xl font-bold mb-4 ">
            Very serious materials for making 
          </h2>
          <p className="mb-5">
            Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
          </p>
    
        </div>

        <div className=" md:w-6/1 grid grid-cols-2 md:grid-cols-3 gap-12  md:items-end items-center">
          <div className=' gap-3 items-center justify-center mb-12'>
            <img src={materialsImg1} alt="" className='h-50 w-80  rounded-lg'/>
            <img src={materialsImg2} alt="" className=' h-50 w-80 rounded-lg mt-3' />
          </div>

          <div className=" md:col-span-2 col-span-1">
            <img src={materialsImg3} alt="" className=" w-100 h-130 rounded-lg " />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Homematerial
