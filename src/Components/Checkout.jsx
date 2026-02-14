import React, { useContext, useState } from "react";
import { ShopContext } from "./ShopContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, total, quantity, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    payment: "cod", // default Cash on Delivery
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    clearCart();
    navigate("/thankyou");
  };

  return (
    <div className="max-w-7xl mx-auto px-3 md:px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section - Form */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          {/* Payment Method */}
          <div>
            <label className="block font-medium mb-2">Payment Method</label>
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            >
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="mbanking">Mobile Banking</option>
              <option value="ppal">Paypal</option>
              <option value="payonerc">Payoneer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded text-lg hover:bg-green-600"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Right Section - Order Summary */}
      <div className="bg-gray-100 p-6 rounded shadow">
        <h2 className="text-xl font-semibold border-b pb-4">Order Summary</h2>
        <div className="mt-4 space-y-2">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.name} x {item.amount}
              </span>
              <span>$ {item.price * item.amount}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-4 font-medium">
          <span>Items:</span>
          <span>{quantity}</span>
        </div>
        <div className="flex justify-between mt-2 font-medium">
          <span>Subtotal:</span>
          <span>$ {isNaN(total) ? 0 : total}</span>
        </div>
        <div className="flex justify-between mt-2 font-medium">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between mt-2 text-lg font-semibold">
          <span>Total:</span>
          <span>$ {isNaN(total) ? 0 : total}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
