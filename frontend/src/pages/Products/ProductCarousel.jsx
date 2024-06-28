import React, { useEffect, useState } from "react";
import { FaRegStar, FaShoppingCart,FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useNavigate, useOutletContext } from "react-router";
const ProductCarousel = () => {
  const products = [
    {
      id: 13,
      name: "DSLR",
      price: 159,
      description: "Best Device to capture special moments",
      brand: "Canon",
      rating: 5,
      quantity: 10,
      stock: 8,
      imgUrl:
        "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2017/02/Sigma-24mm-1.jpg?w=717&ssl=1",
    },
    {
      id: 1,
      name: "Macbook",
      price: 389,
      description: "Best Device to ever used",
      brand: "Apple",
      rating: 5,
      quantity: 10,
      stock: 8,
      imgUrl:
        "https://i.ytimg.com/vi/EWzjwsBevAk/maxresdefault.jpg",
    },
    {
      id: 8,
      name: "Sketchers",
      price: 59,
      description: "Shoes your feet deserve",
      brand: "Sketchers",
      rating: 4,
      quantity: 10,
      stock: 8,
      imgUrl:
        "https://th.bing.com/th/id/OIP.RuxOBglcl_keiAoy-8TrUAAAAA?rs=1&pid=ImgDetMain",
    },
  ];
  const navigate = useNavigate();
  const [current,setCurrent] = useState(1);
  const {cartItems,setCartItems} = useOutletContext()
  
  function handleCarouselCart(e,id){
    e.stopPropagation()
    let product = products.find((p)=>p.id===id)
    let isInCart = cartItems.some((p)=>p.item.id===id)
    if(!isInCart){
      setCartItems([...cartItems,{item:product,quantity:1}])
    }
    
    console.log(cartItems)
  }
  
  
  function nextSlide(){
    setCurrent(current===products.length?1:current+1)
  }
  function prevSlide(){
    setCurrent(current===1?products.length-1:current-1)
  }
useEffect(()=>{
  const timerId = setInterval(nextSlide,3000)
  return ()=>clearInterval(timerId)
})
  
 
  console.log("rendered productCarousel");
  return (
    <>
      <div className="flex m-5 transition hover:cursor-pointer ease-in-out" style={{ width: "700px", height: "100vh" }}>
        <div className="flex items-center mr-10">
        <FaArrowCircleLeft className="text-white items-center text-2xl" onClick={()=>prevSlide()}/>
        </div>
        
        {products.map((product,i) => i+1===current&&(
          <div
            key={product.id}
            onClick={()=>navigate(`/product/${product.id}`)}
            className="bg-gray-800"
            style={{
              width: "700px",
              height: "fit-content",
              boxSizing: "border-box",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <img
              src={product.imgUrl}
              alt={product.name}
              className="transition ease-in-out "
              style={{ height: "460px", width: "700px" }}
            />
            <div className="w-full flex justify-between">
              <div className="w-3/4">
                <h1 className="text-center">{product.name}</h1>
                <p className="text-pink-500 font-semibold text-xl">${product.price}</p>
                <p className="text-white">{product.description}</p>
              </div>
              <div className="flex w-1/4 flex-col items-start justify-between">
                <div>
                  <p className="text-white font-semibold">Brand : {product.brand}</p>
                </div>
                <div className="flex">
                {Array.from({ length: product.rating }, (_, i) => (
                      <FaStar style={{ color: "yellow" }} key={i}/>
                    ))}  
                </div>
                <div>
                  <p className="text-white font-semibold">Quantity : {product.quantity}</p>
                </div>
                <div>
                  <p className="text-white font-semibold">In Stock : {product.stock}</p>
                </div>
                <button onClick={(e)=>handleCarouselCart(e,product.id)} className="w-16 h-10 flex justify-center items-center rounded-full bg-white">
                  <FaShoppingCart className="text-slate-900"/>
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-center ml-10">
          <FaArrowCircleRight className="text-white items-center text-2xl" onClick={()=>nextSlide()}/>
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;
