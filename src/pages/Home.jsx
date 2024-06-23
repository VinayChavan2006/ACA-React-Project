import React from 'react'

import AllProducts from "./Admin/AllProducts";
import ProductCard from "./Products/ProductCard";
import ProductCarousel from "./Products/ProductCarousel";
import { redirect, useNavigate } from "react-router";

function Home() {
  console.log('rendered Home')
  
  const HomeProducts = AllProducts.slice(0,6)
  const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen bg-gray-950 flex flex-col items-center">
      <ProductCarousel></ProductCarousel>
      <div style={{width:"80%",height:"140px",backgroundColor:"white",borderRadius:"5px",marginTop:"80px",boxSizing:"border-box",padding:"10px"}}>
        <h2 className="text-2xl font-semibold text-pink-500 text-center">Welcome to our e-commerce platform!</h2><br />
        <p className="text-xl font-medium text-gray-700 text-center">Explore a diverse selection of high-quality products and exclusive deals tailored to your needs. Enjoy a seamless shopping experience with us.</p>
      </div>
      <div className="w-full h-32 bg-transparent box-border mt-12 mb-6 flex justify-evenly items-center">
        <p className="text-5xl font-normal text-white">Special Products</p>
        <button className="h-10 w-20 rounded-full bg-pink-600 text-white font-semibold" onClick={()=>navigate('/shop')}>Shop</button>
      </div>
      <div className="flex flex-wrap gap-8" style={{width:"950px"}}>
        {HomeProducts.map((product) => <div key={product.id}
          onClick={()=>navigate(`/product/${product.id}`)} className="font-sans bg-gray-900 rounded-md box-border p-3 ml-1 mb-5 shadow-md w-[450px] h-[460px]"
        >
          <ProductCard product={product}></ProductCard>
        </div>)}
      </div>
    </div>
  )
}

export default Home;