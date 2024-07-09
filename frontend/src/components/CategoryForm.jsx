import React, { useRef, useState } from "react";
import { useOutletContext } from "react-router";
import { useCreateCategoryMutation } from "../redux/api/categoryApiSlice.js";
import { useDispatch } from "react-redux";
const CategoryForm = () => {
  const [name,setName] = useState('')
  const [createCategory] = useCreateCategoryMutation()
  const dispatch = useDispatch();
  const { categorylist } = useOutletContext();
  const [categories, setCategories] = useState(categorylist);
  let category = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(typeof(category.current.value));
    try {
      const res = await createCategory({ name: name });
      console.log(res);
      // category.current.value = "";
    } catch (error) {
      console.log(error);
    }
  }
  console.log("rendered CategoryForm");
  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <form>
          <input
            onChange={(e)=>setName(e.target.value)}
            className="w-full rounded-md bg-slate-500 placeholder-slate-300 text-white p-2"
            type="text"
            name="category"
            placeholder="Write Category Name"
          />
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="bg-pink-500 hover:bg-pink-600 text-white w-20 rounded-md p-2 mt-4"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CategoryForm;
