import React, { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import HeartIcon from "./HeartIcon";
import AllProducts from "../Admin/AllProducts";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { useParams,useNavigate } from "react-router";

const ProductDetails = () => {
  const [reviews,setReviews] = useState([{userName:'Vinay Chavan',description:'Nice Product',rating:5}])
  const navigate = useNavigate()
  const [selectedTab,setSelectedTab] = useState('comment');
  const params = useParams()
  let product = AllProducts.find((p)=>p.id===parseInt(params.id))

  const rating = useRef()
  const comment = useRef()
  
  function handleComment(e){
    e.preventDefault()
    setReviews([...reviews,{userName:"Vinay Chavan",description:comment.current.value,rating:rating.current.value}])
    setSelectedTab('review')
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
              <HeartIcon></HeartIcon>
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

            <button className="bg-pink-500 text-white p-3 rounded-md w-full">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col gap-2 w-1/5 ml-10">
            <button onClick={()=>setSelectedTab('comment')} className={`box-border p-3 ${selectedTab==='comment'&&'bg-pink-600'} hover:bg-pink-600 text-white font-semibold rounded-md`}>
              Write Your Review
            </button>
            <button onClick={()=>setSelectedTab('review')} className={`box-border p-3 ${selectedTab==='review'&&'bg-pink-600'} hover:bg-pink-600 text-white font-semibold rounded-md`}>
              All reviews
            </button>
            <button onClick={()=>setSelectedTab('moreProducts')} className={`box-border p-3 ${selectedTab==='moreProducts'&&'bg-pink-600'} hover:bg-pink-600 text-white font-semibold rounded-md`}>
              Related Products
            </button>
          </div>
          {selectedTab==='comment'&& <div className="w-3/5 bg-slate-900 box-border p-3 rounded-lg ml-8">
            <form>
              <label htmlFor="rating" className="text-white text-lg">
                Rating
              </label>
              <br />
              <select
                ref={rating}
                name="rating"
                id="rating"
                className="w-full rounded-md border-black border-2"
              >
                <option value="0">Select</option>
                <option value="1">Inferior</option>
                <option value="2">Decent</option>
                <option value="3">Great</option>
                <option value="4">Excellent</option>
                <option value="5">Exceptional</option>
              </select>
              <br />
              <label
                htmlFor="comment"
                className="text-white font-semibold text-lg"
              >
                Comment
              </label>
              <br />
              <textarea
                ref={comment}
                name="comment"
                id="comment"
                rows="4"
                className="w-full rounded-md"
              ></textarea>
              <button
                onClick={(e)=>handleComment(e)}
                // type="submit"
                // value="Submit"
                className="box-border p-3 bg-pink-600 text-white font-semibold rounded-md"
              >Submit</button>
            </form>
          </div>}

          {/* My Review */}

            
        {selectedTab==='review'&& <div className="w-3/5 bg-slate-900 box-border p-3 rounded-lg ml-8">
         {reviews.map((review)=> <div className="p-3 mb-4 bg-slate-800 flex justify-between">
            <div>
              <p className="text-white font-semibold">{review.userName}</p>
              <div className="flex gap-1">
                {Array.from({ length: review.rating }, (_, i) => (
                  <FaStar style={{ color: "yellow" }} />
                ))}
              </div>
              <p className="text-white font-semibold">{review.description}</p>
            </div>
            <p className="text-white font-semibold">22-06-2024</p>
          </div>)}
          
        </div>}

         {/* More products */}
         {selectedTab==='moreProducts'&&<div className="w-3/5 bg-slate-900 box-border p-3 rounded-lg ml-8">
          <div onClick={()=>setSelectedTab('comment')} className="p-3 bg-slate-800 flex justify-around flex-wrap">
            <div className="font-sans bg-gray-900 rounded-md box-border p-3 ml-1 mb-5 shadow-md w-2/5 h-[460px]">
              <ProductCard product={AllProducts[(parseInt(params.id)+1)%13]}></ProductCard>
            </div>
            <div onClick={()=>setSelectedTab('comment')} className="font-sans bg-gray-900 rounded-md box-border p-3 ml-1 mb-5 shadow-md w-2/5 h-[460px]">
              <ProductCard product={AllProducts[(parseInt(params.id)+2)%13]}></ProductCard>
            </div>
            <div className="font-sans bg-gray-900 rounded-md box-border p-3 ml-1 mb-5 shadow-md w-2/5 h-[460px]">
              <ProductCard product={AllProducts[(parseInt(params.id)+3)%13]}></ProductCard>
            </div>
            <div onClick={()=>setSelectedTab('comment')} className="font-sans bg-gray-900 rounded-md box-border p-3 ml-1 mb-5 shadow-md w-2/5 h-[460px]">
              <ProductCard product={AllProducts[(parseInt(params.id)+4)%13]}></ProductCard>
            </div>
          </div>
        </div>}

        </div>

        

       
      </div>
    </>
  );
};

export default ProductDetails;
