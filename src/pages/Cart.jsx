import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link, useLocation, useOutletContext } from "react-router-dom";
const Cart = () => {
  let {cartItems,setCartItems} = useOutletContext();
  const [cartCount,setCartCount] = useState(cartItems.length)
  
  console.log(cartItems)
  let total=0
  const [Total,setTotal] = useState(total)
  
  for(let i=0;i<cartItems.length;i++){
    total += cartItems[i].price ;
    // setTotal(totPrice)
  }
  useEffect(()=>{
    setTotal(total)
    return ()=>setTotal(0)
  },[])
function handleDelete(e,id){
  let newCartItems = cartItems.filter((item)=>item.id !== id)
  setCartItems(newCartItems)
  
}

  function handleItemCount(e,id){
    
    let prod = cartItems.find((p)=>p.id===id)
    let newItems = []
    for(let i=0;i<e.target.value;i++){
      newItems.push(prod)
    }
    for(let i=0;i<newItems.length;i++){
      total += newItems[i].price ;
      console.log(total)
      setTotal(total)
    }

    setCartCount(cartItems.length+parseInt(e.target.value-1))
  }
  const location = useLocation();
  console.log("rendered Cart");
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-950 flex flex-col items-center overflow-auto">
        {cartItems.length === 0 && (
          <div
            style={{
              width: "80%",
              height: "140px",
              backgroundColor: "#1f2937",
              borderRadius: "5px",
              boxSizing: "border-box",
              padding: "20px",
              marginTop: "60px",
            }}
          >
            <h2 className="text-4xl font-bold text-white">Shopping Cart</h2>
            <br />
            <p className="font-medium text-white">
              Your Cart is Empty{" "}
              <Link to="/shop" className="text-pink-500">
                Go to Shop
              </Link>
            </p>
          </div>
        )}

        {cartItems.length!==0&&<div
          style={{
            width: "80%",
            height: "80%",
            backgroundColor: "#1f2937",
            borderRadius: "5px",
            boxSizing: "border-box",
            padding: "20px",
            marginTop: "60px",
          }}
        >
          <h2 className="text-4xl font-bold text-white">Shopping Cart</h2>
          <br />
          <div className="w-full h-auto flex gap-4">
            <div className="w-1/2 h-fit flex flex-col gap-5">
              {cartItems.map((product) => (
                <div className="w-full h-28 rounded-md flex gap-4 items-center justify-between bg-gray-700 box-border p-3">
                  <img
                    src={product.imgUrl}
                    width={"120px"}
                    className="rounded-md"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-white">
                      {product.name}
                    </h3>
                    <p className="text-white">{product.brand}</p>
                    <p className="text-white">${product.price}</p>
                  </div>
                  <select name="itemCount" className="bg-gray-900 rounded-md text-white" onChange={(e)=>handleItemCount(e,product.id)}>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <MdDelete className="text-red-600 hover:cursor-pointer text-3xl" onClick={(e)=>handleDelete(e,product.id)} />
                </div>
              ))}
            </div>
            <div className="w-1/2 h-auto bg-gray-700 rounded-md box-border p-4">
              <h2 className="text-xl font-semibold text-white">Summary</h2>
              <br />
              <p className="text-white">Items:  {cartCount}</p><br />
              <h2 className="text-2xl font-semibold text-white">Total: ${Total}</h2><br />
              <button className="bg-pink-600 w-full h-10 rounded-md text-white">Proceed to Checkout</button>
            </div>
          </div>
        </div>}
      </div>
    </>
  );
};

export default Cart;