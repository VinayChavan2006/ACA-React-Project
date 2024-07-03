import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useOutletContext } from "react-router";
const CategoryList = () => {
  const {categoryList} = useOutletContext()
   const [categories, setCategories] = useState(categoryList);
  let category = useRef()
  function handleSubmit(e){
    e.preventDefault()
    setCategories([...categories,category.current.value])
    category.current.value = ""
  }
  function handleDelete(category){
    setCategories(categories.filter((cat)=> cat !== category))
  }
  console.log("rendered CategoryList");
  return (
    <>
      <div className="w-full h-full flex justify-center">
        <div className="w-4/5 mt-8 h-fit box-border p-8 bg-slate-900 rounded-md">
          <h1 className="text-center mb-8">Manage Categories</h1>
          <div className="w-full flex flex-col gap-3">
            <input
              ref={category}
              className="w-full rounded-md bg-slate-500 placeholder-slate-300 text-white p-2"
              type="text"
              name="category"
              placeholder="Write Category Name"
            />
            <button type="submit" onClick={(e)=>handleSubmit(e)} className="bg-pink-500 hover:bg-pink-600 text-white w-20 rounded-md p-2">Create</button>
          </div>
          <br />
          <hr />
          <div className="flex flex-wrap w-full mt-2 gap-10">
            {categories.map((category) => (
              <span className="inline-flex items-center rounded-md bg-pink-700 px-2 py-1  font-medium text-white ring-1 ring-inset ring-indigo-700/10">
                {category} <RxCross2 onClick={()=>handleDelete(category)}/>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
