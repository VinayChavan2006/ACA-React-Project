import React, { useState ,useEffect} from 'react'

import HeartIcon from "./HeartIcon";
import { useNavigate, useOutletContext } from "react-router";
import {toast} from 'react-toastify'
const ProductCard = ({ product }) => {
  const {cartItems,setCartItems,AllProduct} = useOutletContext()
  const {favItems,setFavItems} = useOutletContext()
  let AllProducts = AllProduct
  const navigate = useNavigate();
  console.log("rendered ProductCard");
  function handleAddToCart(e){
    e.stopPropagation();
    let isInCart = cartItems.some((p)=>p.item.id===product.id)
    if(!isInCart){
    setCartItems([...cartItems,{item:product,quantity:1}])
    }
    toast.success('Item added to Cart')
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
      
        <div className="flex-none w-full h-64 relative">
          <img
            onClick={()=>navigate(`/product/${product.id}`)}
            src={product.imgUrl}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            style={{ borderRadius: "6px" }}
          />
           <HeartIcon isFavorite={isFavorite} handleFavorites={()=>handleFavorites(product.id)}></HeartIcon>
          
          
          
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap w-full">
            <h1 className="flex-auto text-lg font-semibold text-white">
              {product.name}
            </h1>
            <div className="text-md font-semibold w-14 h-6 flex justify-center items-center bg-pink-600 rounded-full text-gray-200">
              ${product.price}
            </div>
            <div className="w-full flex-none text-sm font-medium text-white mt-2">
              {product.brand}
            </div>
          </div>

          <div className="mt-3 mb-3 text-white">
          <div className="flex">
                {Array.from({ length: product.rating }, (_, i) => (
                      <FaStar style={{ color: "yellow" }} />
                    ))}  
                </div>
          </div>

          <div className="flex space-x-4 mb-6 text-sm font-medium w-full">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-pink-600 text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                onClick={handleAddToCart}
                className="h-10 px-6 font-semibold rounded-md border border-white hover:bg-pink-600 text-white"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </form>
      
    </>
  );
};

export default ProductCard;
