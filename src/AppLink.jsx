import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./Components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import ShopFoods from "./Components/ShopFoods";
import NewTaste from "./pages/NewTaste";
import ScrollToTop from "./Components/ScrollToTop";
import ProductList from "./Components/ProductList";
import Checkout from "./Components/Checkout";
import ThankYou from "./Components/ThankYou";


const AppLink = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      
        <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/shopfoods" element={<ShopFoods />} />
        <Route path="/new-taste" element={<NewTaste />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />

      </Routes>
      

      <Footer />
    </div>
  );
};

export default AppLink;
