import React from 'react'
import { Link } from "react-router-dom";




const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Your order has been placed successfully.  
          We’ll send you a confirmation email with the details.
        </p>
        <Link to="/" className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition" >
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}

export default ThankYou
