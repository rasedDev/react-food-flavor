import React, { useContext, useState } from 'react'
import newtasteimg from "../assets/new-taste-yr.png";
import { ShopContext } from '../Components/ShopContext'
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import Homematerial from './Homematerial';
import btnIcon from '../assets/button-icon.png';

const NewTaste = () => {
  const { products, addToCart, cart } = useContext(ShopContext);

  // only newTasty category product filter 
  const newTastyProducts = products.filter(
    (product) => product.category === "newTasty"
  );

  //Check if it is on the card

  // 0nly 6 product show
  const [visibleCount, setVisibleCount] = useState(6);

  // visibleCount  slice 
  const visibleProducts = newTastyProducts.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6); // load more 6 product
  };


  return (
    <section className='min-h-screen mx-auto'>
      <div
        className='bg-center bg-cover mt-16 h-90 py-40 p-4 bg-gray-500 text-gray-600'
        style={{ backgroundImage: `url(${newtasteimg})` }}
      ></div>

      <div className='max-w-7xl mx-auto px-3 md:px-6 text-center mt-20'>
        <h2 className='text-3xl font-semibold mb-8 text-gray-800'>
          Our Wonderful New Tasty
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {visibleProducts.map((product) => {
            const { id, image, name, price } = product;

            // Check if it's in the cart
              const isInCart = cart.some((item) => item.id === id); 
            return (
              <div
                key={id}
                className='bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-1'
              >
                <Link to={`/product/${id}`}>
                  <img
                    src={image}
                    alt={name}
                    className='h-64 w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-200 cursor-pointer'
                  />
                </Link>

                <div className='mt-4'>
                  <h4 className='text-lg font-semibold text-gray-900'>{name}</h4>
                  <p className='text-gray-600'>$ {price}</p>
                </div>

                <button onClick={() => addToCart(product, id)}
                  disabled={isInCart} // If in cart disable
                  className={`flex items-center justify-center gap-2 w-full py-2 mt-4 text-lg font-medium rounded-md transition duration-300 
                    ${isInCart 
                      ? "bg-gray-400 text-white cursor-not-allowed" 
                      : "bg-amber-500 text-white hover:bg-amber-600 cursor-pointer"}`}
                >
                  {isInCart ? "Already in Cart" : <><FaCartPlus /> Add To Cart</>}
                </button>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        {visibleCount < newTastyProducts.length && (
          <div className="flex justify-center items-center mt-8 mx-12">
            <button
            onClick={handleViewMore}
            className='text-base items-center  font-semibold text-amber-500 flex cursor-pointer'>
            View More
              <img src={btnIcon} alt="btn icon"/>
          </button>
          </div>
          
        )}

        <Homematerial />
      </div>
    </section>
  );
};

export default NewTaste;
