import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import HeartIcon from "./HeartIcon";
import ProductTabs from "./ProductTabs"
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { useParams,useNavigate, useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const ProductDetails = () => {
  const {AllProduct} = useOutletContext()
  let AllProducts = AllProduct
  const [loggedIn,setLoggedIn] = useState(false)

  
  const navigate = useNavigate()
  
  const {cartItems,setCartItems,favItems,setFavItems} = useOutletContext()
  function handleAddToCart(e,id){
    e.stopPropagation()
    let product = AllProducts.find((p)=>p.id===id)
    let isInCart = cartItems.some((p)=>p.item.id===id)
    if(!isInCart){
      setCartItems([...cartItems,{item:product,quantity:1}])
    }
    toast.success('Item added to Cart')
    console.log(cartItems)
  }
  

  const params = useParams()
  let product = AllProducts.find((p)=>p.id===parseInt(params.id))

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


 
  
  
  console.log("rendered productDetails");
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-950 ml-[58px] ">
        <button onClick={()=>navigate('/')} className="box-border p-3 bg-slate-800 text-white flex items-center gap-3 font-semibold rounded-md">
          <FaArrowLeft />
          Go Back
        </button>
        <div className="flex w-full">
          <div className="w-2/5 m-10 box-border p-4 bg-slate-900 rounded-md">
            <div className="flex-none w-full h-96 relative">
              <img
                src={product.imgUrl}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                style={{ borderRadius: "6px" }}
              />
              <HeartIcon isFavorite={isFavorite} handleFavorites={()=>handleFavorites(product.id)}></HeartIcon>
            </div>
          </div>
          <div className="flex flex-col p-6 w-2/5 justify-between">
            <h1>{product.name}</h1>
            <p className="text-white">{product.description}</p>
            <h1 className="text-pink-500">${product.price}</h1>
            <div>
              <div>
                <p className="text-white">Brand : {product.brand}</p>
              </div>
              <div>
                <p className="text-white">In stock : 8</p>
              </div>
              <div>
                <p className="text-white">Quantity : 10</p>
              </div>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar style={{ color: "yellow" }} />
              ))}
            </div>
            <div className="flex items-center">
              <p className="text-white">Quantity: </p>
              <select name="quantity" id="">
                {Array.from({ length: 5 }, (_, i) => (
                  <option style={{ color: "black" }} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <button onClick={(e)=>handleAddToCart(e,product.id)} className="bg-pink-500 text-white p-3 rounded-md w-full">
              Add to Cart
            </button>
          </div>
        </div>
        

        <ProductTabs></ProductTabs>

        

       
      </div>
    </>
  );
};

export default ProductDetails;
