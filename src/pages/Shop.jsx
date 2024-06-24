import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductCard from "./Products/ProductCard";
import HeartIcon from "./Products/HeartIcon";
import  AllProducts  from "./Admin/AllProducts";
import { Link, useOutletContext } from "react-router-dom";
const Shop = () => {
  const {cartItems,setCartItems} = useOutletContext()
  
  function handleAddToCart(e,id){
    e.stopPropagation()
    let product = AllProducts.find((p)=>p.id===id)
    
    setCartItems([...cartItems,{item:product,quantity:1}])
    console.log(cartItems)
  }
  
  const categories = [
    "Phone",
    "Clothes",
    "Laptop",
    "Earpods",
    "Drones",
    "Shoes",
    "Tablets",
    "Cameras",
  ];
  const brands = [
    "Apple",
    "Dell",
    "Samsung",
    "Drone",
    "Denim",
    "Sketchers",
    "Adidas",
    "Canon",
  ];
  console.log("rendered Shop");
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-950 flex justify-between">
        <div
          style={{ scrollbarColor: "rgb(2 6 23) rgb(30 41 59)" }}
          className="w-[240px] rounded-lg ml-24 box-border p-4 mt-8 h-screen overflow-y-auto bg-gray-900 sticky top-8"
        >
          <h2 className="text-xl font-semibold text-white mb-3">
            Filter By Categories
          </h2>
          <form>
            {categories.map((category, index) => (
              <div className="mb-3">
                <label className="flex items-center cursor-pointer bg-gray-800 p-2 rounded-md hover:bg-gray-700 hover:text-pink-500 transform hover:scale-x-105 transition-transform duration-200 ease-out">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    name="category"
                    className="mr-2 h-5 w-5 text-pink-500 focus:ring-pink-500 border-gray-300"
                    defaultChecked=""
                  />
                  <span className="text-gray-300">{category}</span>
                </label>
              </div>
            ))}

            <h2 className="text-xl font-semibold text-white mt-3 mb-3">
              Filter By Brands
            </h2>

            {brands.map((brand, index) => (
              <div className="mb-3">
                <label className="flex items-center cursor-pointer bg-gray-800 p-2 rounded-md hover:bg-gray-700 hover:text-pink-500 transform hover:scale-x-105 transition-transform duration-200 ease-out">
                  <input
                    type="radio"
                    id={`brand-${brand}`}
                    name="brand"
                    className="mr-2 h-5 w-5 text-pink-500 focus:ring-pink-500 border-gray-300"
                    defaultChecked=""
                  />
                  <span className="text-gray-300">{brand}</span>
                </label>
              </div>
            ))}

            <h2 className="text-xl font-semibold text-white mt-3 mb-3">
              Filter by price
            </h2>

            <input
              type="number"
              placeholder="Enter Price"
              className="rounded-md"
            />
            <br />
            <br />
            <input
              type="submit"
              value="Reset Filters"
              className="w-full box-border p-3 rounded-md bg-pink-500 text-white"
            />
          </form>
        </div>
        <div className="w-3/4 ml-16">
        <h2 className="text-white text-xl font-semibold text-center mt-8 mb-6">13 Products</h2>
        <div className="flex flex-wrap gap-5 ">


        {AllProducts.map((product,i)=> <div className="mb-4">
            <div className="w-[250px] h-[350px] relative bg-[#0D1F2D] rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <section className="relative">
                <Link
                  className="block relative"
                  to={`/product/${product.id}`}
                >
                  <span className="absolute bottom-3 right-3 bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300 shadow-sm">
                    {product.brand}
                  </span>
                  <img
                    className="cursor-pointer w-full rounded-t-lg"
                    src={product.imgUrl}
                    alt={product.name}
                    style={{ height: 170, objectFit: "cover" }}
                  />
                </Link>
                
                <HeartIcon></HeartIcon>
              </section>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="text-xl font-bold text-white dark:text-white">
                    {product.name}
                  </h5>
                  <p className="text-lg font-semibold text-pink-500">${product.price}</p>
                </div>
                <p className="mb-3 font-normal text-[#CFCFCF] text-sm">
                  {product.description}
                </p>
                <section className="flex justify-between items-end">
                  <Link
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 shadow-sm"
                    to="/product/1"
                  >
                    Read More
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                  <button
                    onClick={(e)=>handleAddToCart(e,product.id)}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700"
                    aria-label="Add to Cart"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height={25}
                      width={25}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z" />
                    </svg>
                  </button>
                </section>
              </div>
            </div>
          </div>)}
        </div>
          
        </div>
      </div>
    </>
  );
};

export default Shop;
