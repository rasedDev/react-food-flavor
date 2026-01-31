import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { FiTrash2 } from "react-icons/fi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

const Cart = () => {
  const {cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, quantity, total} = useContext(ShopContext);

  return (
    <div>
      {/* Left Section */}
      <div>
        {/* Header */}
        <div>
          <h1>Shopping Cart</h1>
          <h1>Items: ({quantity}) </h1>
          <FiTrash2 />
        </div>

        {/* subHeader */}
        <div>
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>

        {/* Cart items */}
        <div>
          {cart.length > 0 ? (
            cart.map((item) => {
              const {id, image, name, price, amount} = item; 
                <div key={id}> 
                  <div>
                    <img src={image} alt="" />
                    <div>
                      <h3>{name}</h3>
                      <button onClick={() => removeFromCart(id)}><FiTrash2 /> Remove</button>
                    </div>
                  </div>

                  <div>
                    <button onClick={() => decreaseQuantity(id)}> <IoMdRemove /> </button>
                    <span>{amount}</span>
                    <button onClick={() => increaseQuantity(id)}> <IoMdAdd /> </button>
                  </div>

                  <p>$ {price}</p>
                  <p>$ {price * amount}</p>
                </div>
            })
          ) : (
            <p>Your cart is empty</p>
          )};
        </div>
      </div>


      {/* Right Section */}
      <div>
        <h2></h2>
        <div>
          <span>Items:</span>
          <span>{quantity}</span>
        </div>

        <div>
          <span>Subtotal</span>
          <span>$ {isNaN(total) ? 0 : total}</span>
        </div>

        <div>
          <span>Shipping Fee</span>
          <span>Free</span>
        </div>

        <div>
          <span>Total Cost</span>
          <span>$ {isNaN(total) ? 0 : total}</span>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>

  ) 
};

export default Cart;
