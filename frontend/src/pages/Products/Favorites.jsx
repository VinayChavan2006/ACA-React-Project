import React from 'react'
import { useLocation, useOutletContext } from 'react-router'
import ProductCard from './ProductCard'


const Favorites = () => {
  // const favProducts = [{},{},{}]
  // const location = useLocation()
  const {favItems,setFavItems} = useOutletContext()
  console.log('rendered Favroties')
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-950 flex flex-col items-center">
      {favItems.length===0&&<div style={{width:"80%",height:"140px",backgroundColor:"#1f2937",borderRadius:"5px",boxSizing:"border-box",padding:"20px",marginTop:"60px"}}>
        <h2 className="text-4xl text-center font-bold text-white">Favorite Products</h2><br />
        <p className="font-medium text-center text-white">You have no favorite products. Add some to see them here.</p>
      </div>}

      {favItems.length!==0&&<div className="flex flex-col items-center" style={{width:"80%",height:"auto",backgroundColor:"#1f2937",borderRadius:"5px",boxSizing:"border-box",padding:"20px",marginTop:"60px"}}>
        <h2 className="text-4xl text-center font-bold text-white">Favorite Products</h2><br />
          {favItems.map((product)=> <div key={product.id}
          className="font-sans bg-gray-900 rounded-md box-border p-3 ml-1 mb-5 shadow-md w-[450px] h-[460px]"
        >
          <ProductCard product={product}></ProductCard>
        </div>)}
        
      </div>}

      </div>
    </>
  )
}

export default Favorites
