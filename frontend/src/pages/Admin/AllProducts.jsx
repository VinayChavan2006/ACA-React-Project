import React, { useState } from "react";
import { Navigate, useNavigate, useOutletContext } from "react-router";

const AllProducts = () => {
  const navigate = useNavigate()
  const { AllProduct } = useOutletContext();
  const [ProductList, setProductList] = useState(AllProduct);
  console.log("rendered AllProducts");
  return (
    <>
      <div className="ml-20 w-full">
        <h1>AllProducts ({ProductList.length})</h1>
        {ProductList.map((product) => (
          <div className="w-3/4 h-[200px] bg-slate-800 rounded-md p-3 mt-6 mb-6 flex items-center">
            <div className="w-2/5 h-full ">
              <img src={product.imgUrl} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full p-3 h-fit">
              <p className="text-white text-s font-sans">{product.name}</p>
              <p className="text-gray-400 text-s">
                Created: May 2, 2024
                <br />
                {product.description}
              </p>
              <div className="w-full flex justify-between items-center">
                <button onClick={()=>navigate(`../product/update/:${product.id}`,{state:{product:product}})} className="bg-pink-600 mt-2 text-white p-2 rounded-md cursor-pointer">
                  Update
                </button>
                <div className="text-white">
                  <p className="price-tag">$234</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
