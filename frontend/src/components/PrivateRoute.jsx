import React from 'react'
import { Outlet } from 'react-router'

const PrivateRoute = () => {

  //Auth logic
  console.log('rendered PrivateRoute')
  return (
    <div className='w-full h-full bg-slate-950'>
      <Outlet/>
    </div>
  )
}

export default PrivateRoute
