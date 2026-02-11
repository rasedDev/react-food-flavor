import React from 'react'
import materialsImg1 from "../assets/contactimg.png";
import materialsImg2 from "../assets/aboutimgfd.png";
import materialsImg3 from "../assets/myHomeimg-shop.jpg";




const Homematerial = () => {
  return (
    <section className="mx-2 md:mx-24 mt-28">
  <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 mx-auto">
    <div className="md:w-1/2">
      <h2 className="text-4xl font-bold mb-4">
        Very serious materials for making
      </h2>
      <p className="mb-5">
        Because panto was very serious about designing furniture for our environment,
        using a very expensive and famous capital but at a relatively low price
      </p>
    </div>

    <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6 items-end">
      <div className="flex flex-col gap-3 items-center">
        <img src={materialsImg1} alt="" className=" h-30 w-50 md:h-47 md:w-100 rounded-lg"/>
        <img src={materialsImg2} alt="" className=" h-30 w-50 md:h-47 md:w-100 rounded-lg"/>
      </div>
      <div className="md:col-span-2 col-span-1">
        <img src={materialsImg3} alt="" className="w-full h-70 md:h-110 rounded-lg"/>
      </div>
    </div>
  </div>
</section>

  )
}

export default Homematerial
