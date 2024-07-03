import React, { useState } from "react";
import { useParams } from "react-router";
import { useOutletContext } from "react-router";
const ProductUpdate = () => {
  const {id} = useParams()
  const { AllProduct,setAllProduct } = useOutletContext();
  const [data,setData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: '',
    brand: ''
  })
  function handleUpdate(){
    setAllProduct({...data,id:id})
  }
  console.log("rendered ProductUpdate");
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white ">
            Update Product
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-white "
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={e=>setData({...data,[e.target.name]:e.target.value})}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white bg-slate-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="img"
                className="block text-sm font-medium leading-6 text-white "
              >
                Image URL
              </label>
              <div className="mt-2">
                <input
                  onChange={e=>setData({...data,[e.target.name]:e.target.value})}
                  id="img"
                  name="img"
                  type="text"
                  autoComplete="img"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white bg-slate-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-white"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  onChange={e=>setData({...data,[e.target.name]:e.target.value})}
                  id="price"
                  name="price"
                  type="number"
                  autoComplete="price"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white bg-slate-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-white "
              >
                Category
              </label>
              <div className="mt-2">
                <input
                  onChange={e=>setData({...data,[e.target.name]:e.target.value})}
                  id="category"
                  name="category"
                  type="text"
                  autoComplete="category"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white bg-slate-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium leading-6 text-white "
              >
                Brand
              </label>
              <div className="mt-2">
                <input
                  onChange={e=>setData({...data,[e.target.name]:e.target.value})}
                  id="brand"
                  name="brand"
                  type="text"
                  autoComplete="brand"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white bg-slate-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-white "
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  onChange={e=>setData({...data,[e.target.name]:e.target.value})}
                  id="description"
                  name="description"
                  autoComplete="description"
                  required
                  className="block w-full bg-slate-600 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                onClick={handleUpdate}
                type="submit"
                className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductUpdate;
