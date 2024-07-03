import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
const Order = () => {
  let {id} = useParams()
  console.log('rendered Order')
  return (
    <>
      <main className="grid min-h-full place-items-center bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center bg-slate-800 w-4/5 p-5 rounded-md">
          <p className="text-base font-semibold text-pink-600">Your Order ID is : {id} </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Order Successfull</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">You can check your order in Profile section</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default Order
