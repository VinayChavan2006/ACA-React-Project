import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useOutletContext } from "react-router";
import CategoryForm from "../../components/CategoryForm";
const CategoryList = () => {
  const {categorylist} = useOutletContext()
   const [categories, setCategories] = useState(categorylist);
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
          <CategoryForm/>
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
