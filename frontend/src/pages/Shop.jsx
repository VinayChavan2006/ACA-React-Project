import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductCard from "./Products/ProductCard";
import HeartIcon from "./Products/HeartIcon";
import  AllProducts  from "./Admin/AllProducts";
import { Link, useOutletContext } from "react-router-dom";
import SmallProduct from "./Products/SmallProduct";
const Shop = () => {
  const {cartItems,setCartItems,favItems,setFavItems} = useOutletContext()
  const [allProducts,setAllProducts] = useState(AllProducts)




  function handleBrandFilters(e,brand){
    
    let isSelected = e.target.checked;
    if(isSelected){
     let newProducts = allProducts.filter((p)=>p.brand===brand)
     setAllProducts(newProducts)
    }
   
    if(allProducts.length===0){
     setAllProducts(AllProducts)
   }
  }

  // let PriceInput = useRef()
  const [search,setSearch] = useState('')
  function handleFilterByPrice(e){
    // e.preventDefault()
    // console.log(parseInt(PriceInput.current.value))
    if(search!==''){
      let priceFilteredProducts = allProducts.filter((p)=>p.price.toString().includes(search))
    console.log(priceFilteredProducts)
    setAllProducts(priceFilteredProducts)
    }
    if(allProducts.length===0){
      setAllProducts(AllProducts)
    }
  }
  useEffect(handleFilterByPrice,[search])



   const [selectedCategoryFilters,setSelectedCategoryFilters] = useState([])
  function handleFilterByCategories(e,selectedCategory){
    if(selectedCategoryFilters.includes(selectedCategory)){
      let filters = selectedCategoryFilters.filter((cat)=>cat!==selectedCategory);
    setSelectedCategoryFilters(filters);
    }
    else{
      setSelectedCategoryFilters([...selectedCategoryFilters,selectedCategory])
    }
    
  }
  useEffect(()=>{
    filterItems();
  },[selectedCategoryFilters])

  function filterItems(){
    if(selectedCategoryFilters.length>0){
      let tempItems = selectedCategoryFilters.map((selectedCategory)=>{
        let temp = AllProducts.filter((item)=>item.category===selectedCategory)
        return temp;
      })
      setAllProducts(tempItems.flat())
    }else{
      setAllProducts([...AllProducts])
    }
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
                    
                    onClick={(e)=>handleFilterByCategories(e,category)}
                    type="checkbox"
                    
                    name={category}
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
                    onClick={(e)=>handleBrandFilters(e,brand)}
                    type="radio"
                    id={`${brand}`}
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
              onChange={(e)=>{e.preventDefault()
                setSearch(e.target.value)}}
              // ref={PriceInput}
              type="text"
              placeholder="Enter Price"
              className="rounded-md"
            />
            <br />
            <br />
            <button
              value="Reset Filters"
              className="w-full box-border p-3 rounded-md bg-pink-500 text-white"
            >Reset Filters</button>
          </form>
        </div>
        <div className="w-3/4 ml-16">
        <h2 className="text-white text-xl font-semibold text-center mt-8 mb-6">13 Products</h2>
        <div className="flex flex-wrap gap-5 ">


        {allProducts.map((product,i)=> <SmallProduct key={product.id} product={product}/>)}
        </div>
          
        </div>
      </div>
    </>
  );
};

export default Shop;
