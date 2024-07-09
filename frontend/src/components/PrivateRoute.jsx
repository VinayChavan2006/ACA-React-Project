import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router'

const PrivateRoute = () => {
  const {userInfo} = useSelector(state=>state.auth)

  //Auth logic
  console.log('rendered PrivateRoute')
  return (
    <div className='w-full h-full bg-slate-950'>
      { userInfo?<Outlet />:<Navigate to="/login"  />}
    </div>
  )
}

export default PrivateRoute
