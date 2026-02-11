import React from 'react'
import contacthedr from "../assets/contactimg.png";
import { NavLink } from "react-router-dom";
import contactUsImg from "../assets/contactus-beauty.png"
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";





const Contacts = () => {
  return (
    <section className=' min-h-screen  mx-auto '>
      <div className=' bg-center bg-cover mt-16  h-90 py-40 p-4  bg-gray-500 text-gray-600 ' style={{backgroundImage: `Url(${contacthedr})`}}> </div>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* Left Side */}
        <div>
          <div className=' mt-8 h-auto mx-auto  '>
            <img src={contactUsImg} alt="Contact" className=' mx-auto items-center justify-center  rounded-lg h-80'  />
          </div>

          <div className='ml-16 my-10 space-y-2'>
            <p className=' text-center font-bold text-3xl mb-10'>Contuct Us</p>
          
          <h2 className='font-semibold text-2xl'>OUR OFFICE</h2>
          <p className='flex gap-2 items-center text-lg'><MdOutlineMapsHomeWork className='text-2xl text-gray-600'/> Toyenbee Circular Road, Motijheel, Dhaka</p>
          <p className=' flex gap-2 items-center  text-lg'> <IoMdMail className='text-2xl text-gray-600'/> info-foodflavor@foodflavor.com</p>
          <p className='flex gap-2 items-center text-lg'> <FaPhone className='text-lg text-gray-600'/> +1 (666) 000-0000</p>

          <h3 className='mt-5 text-2xl font-semibold'>OPENING TIME</h3>
          <p className=' text-lg'>Saturday – Thursday : 9.00 AM- 6.00 PM</p>
          </div>       
        </div> 
         


         {/* right side */}
         <div className='py-10 px-10'>
          <h2 className="text-2xl text-center text-blue-600 font-bold mb-2">Get in touch</h2>
          <h3 className=' font-bold mb-5'>Our friendly team would love to hear from you.</h3>

          <form className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>Subject</label>
              <input type="text" placeholder='Your Subject' className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>Your name</label>
              <input type="text" placeholder='Your name' className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>Email</label>
              <input type="email" placeholder='you@company.com' className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>Phone number</label>
              <input type="number" placeholder='US +1 (666) 000-0000' className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea  placeholder='Leave us a message...' rows='4' className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              </textarea>             
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                I agree to the friendly privacy policy.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Send message
            </button>
          </form>
         </div>

        </div>
      </div>

    </section>
  )
}

export default Contacts
