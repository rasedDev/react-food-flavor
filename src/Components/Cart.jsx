import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { FiTrash2 } from "react-icons/fi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    quantity,
    total,
  } = useContext(ShopContext);

  return (
    <div className="mt-26 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
      {/* Left Section */}
      <div className="lg:2/3 bg-white p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-semibold">Shopping Cart</h1>
          <h1 className="text-lg">Items: ({quantity}) </h1>
          <FiTrash2
            onClick={clearCart}
            className=" text-red-500 hover:text-red-600 text-2xl cursor-pointer cursor-pointer"
          />
        </div>

        {/* subHeader */}
        <div className=" grid grid-cols-4 text-gray-700 font-semibold mt-6 pb-2 border-b">
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>

        {/* Cart items */}
        <div>
          {cart.length > 0 ? (
            cart.map((item) => {
              const { id, image, name, price, amount } = item;
              return (
                <div
                  key={id}
                  className=" grid grid-cols-4 items-center py-4 border-b text-gray-700"
                >
                  <Link to={`/product/${id}`}>
                    <img
                      src={image}
                      alt=""
                      className=" w-16 h-16 rounded-md object-cover"/>
                  </Link>
                  <div className=" flex items-center space-x-4">
                    
                    <div>
                      <h3 className=" font-semibold">{name}</h3>
                      <button
                        onClick={() => removeFromCart(id)}
                        className=" text-red-500 hover:text-red-600 text-sm flex items-center gap-1 mt-2 cursor-pointer"
                      >
                        <FiTrash2 /> Remove
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => decreaseQuantity(id)}
                      className="w-8 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-xl cursor-pointer "
                    >
                      {" "}
                      <IoMdRemove />{" "}
                    </button>
                    <span className="text-lg">{amount}</span>
                    <button
                      onClick={() => increaseQuantity(id)}
                      className="w-8 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-xl cursor-pointer"
                    >
                      {" "}
                      <IoMdAdd />{" "}
                    </button>
                  </div>

                  <p className=" text-lg font-medium">$ {price}</p>
                  <p className=" text-lg font-semibold">$ {price * amount}</p>
                </div>
              );
            })
          ) : (
            <p className=" text-gray-500 mt-4">Your cart is empty</p>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className=" lg:w-1/3 bg-gray-100 p-6 rounded-lg pb-4">
        <h2 className=" text-xl font-semibold border-b pb-4">Cart Summary</h2>
        <div className="flex justify-between mt-2">
          <span className="text-gray-700">Items:</span>
          <span className=" font-medium">{quantity}</span>
        </div>

        <div className="flex justify-between mt-2">
          <span className="text-gray-700">Subtotal</span>
          <span>$ {isNaN(total) ? 0 : total}</span>
        </div>

        <div className="flex justify-between mt-2">
          <span className="text-gray-700">Shipping Fee</span>
          <span className=" font-medium">Free</span>
        </div>

        <div className="flex justify-between mt-2">
          <span className="text-gray-700">Total Cost</span>
          <span className=" font-medium">$ {isNaN(total) ? 0 : total}</span>
        </div>
        <button className=" w-full bg-green-500 text-white py-3 mt-4 rounded text-lg cursor-pointer">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
