import React, { useEffect, useState } from 'react'
import AllProducts from '../Admin/AllProducts';
import { Link, useOutletContext } from 'react-router-dom';
import HeartIcon from './HeartIcon';

const SmallProduct = ({product}) => {
  console.log('rendered SmallProduct')
  let {favItems,setFavItems,cartItems,setCartItems} = useOutletContext()
  function handleAddToCart(e){
    e.stopPropagation();
    let isInCart = cartItems.some((p)=>p.item.id===product.id)
    if(!isInCart){
    setCartItems([...cartItems,{item:product,quantity:1}])
    }
  }

  const [isFavorite,setIsFavorite] = useState(false)
  useEffect(() => {
    const isFav = favItems.some((p) => p.id === product.id);
    setIsFavorite(isFav);
  }, [favItems, product.id]);
  const handleFavorites = (id)=>{  
    let isFav = favItems.some((p)=>p.id===id)
    if(isFav){
      setIsFavorite(false)
      removeFavorites(id); 
    }
    else{
      setIsFavorite(true)
      let product = AllProducts.find((p)=>p.id===id)
      setFavItems([...favItems,product])
    }
    
    console.log(favItems)
  }
  const removeFavorites = (id)=>{
    let product = favItems.filter((p)=>p.id!==id)
    setFavItems(product)
  }
  return (
    <>
      <div className="mb-4">
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
                
                <HeartIcon isFavorite={isFavorite} handleFavorites={()=>handleFavorites(product.id)}></HeartIcon>
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
          </div>
    </>
  )
}

export default SmallProduct
