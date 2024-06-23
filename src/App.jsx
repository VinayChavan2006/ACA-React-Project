import React from 'react'

import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./pages/Products/ProductCard";
import ProductCarousel from './pages/Products/ProductCarousel'
import ProductDetails from "./pages/Products/ProductDetails";
import Profile from "./pages/User/Profile";
import Loader from './components/Loader'
import { useState } from "react";

const App = () => {
  const [cartItems,setCartItems] = useState([])
  const [favItems,setFavItems] = useState([])
  return (
    <>
      <ToastContainer />
      <Navigation cartItems={cartItems} favItems={favItems}/>
      {/* <Loader></Loader> */}
      {/* <ProductDetails></ProductDetails> */}
      {/* <Profile></Profile> */}
      <main className="w-full h-screen">
        <Outlet context={{cartItems,setCartItems,favItems,setFavItems}}/>
      </main>
    </>
  );
};

export default App;
