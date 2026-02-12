import React, { useContext, useState } from "react";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import shophomeimg from "../assets/homeimg-shop.jpg";
import Homematerial from "../pages/Homematerial";
import btnIcon from "../assets/button-icon.png";
import Rating from "./Rating";

const ProductList = () => {
  const { products, cart, addToCart } = useContext(ShopContext);

  // 0nly 6 product show
  const [visibleCount, setVisibleCount] = useState(6);

  // visibleCount  slice
  const visibleProducts = Array.isArray(products)
    ? products.slice(0, visibleCount)
    : [];

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6); // load more 6 product
  };

  return (
    <div className="max-w-7xl mx-auto px-6 text-center mt-20">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">
        Our Awesome Foods
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {visibleProducts.map((product) => {
          const { id, image, name, price } = product;
          const isInCart = cart.some(item => item.id === id); // ✅ check cart

          return (
            <div
              key={id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-200 hover:transition-y-1 flex flex-col h-full"
            >
              <Link to={`/product/${id}`}>
                <img
                  src={image}
                  alt=""
                  className="h-64 w-full object-cover rounded-lg transform hover:scale-103 transition-transform duration-200 cursor-pointer"
                />
              </Link>

              <div className=" mt-4 grow">
                <h4 className="text-lg font-semibold text-gray-900  ">{name}</h4>
                <Rating rating={product.rating}/>
                <p className="text-gray-600 text-md">Price $ {price}</p>
              </div>
        
              <button onClick={() => addToCart(product, id)}
                disabled={isInCart} // ✅ disable if already in cart
                className={`flex items-center justify-center gap-2 w-full py-2 mt-4 text-lg font-medium rounded-md transition duration-300
                  ${isInCart 
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed" 
                    : "bg-amber-500 text-white hover:bg-amber-600 cursor-pointer"}`}>
                <FaCartPlus /> {isInCart ? "Added" : "Add To Cart"}
              </button>
            </div>
          );
        })}
      </div>

      {visibleCount < products.length ? (
        <div className="flex justify-center items-center mt-8 mx-12">
          <button
            onClick={handleViewMore}
            className="text-base items-center  font-semibold text-amber-500 flex cursor-pointer"
          >
            View More
            <img src={btnIcon} alt="btn icon" />
          </button>
        </div>
      ) : null}

      <Homematerial />
    </div>
  );
};

export default ProductList;
