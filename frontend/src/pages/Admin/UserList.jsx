import React from 'react'

const UserList = () => {
  const people = [{name:'Vinay',email:'vinay@gmail.com'},{name:'Vinay',email:'vinay@gmail.com'},{name:'Vinay',email:'vinay@gmail.com'},{name:'Vinay',email:'vinay@gmail.com'}]
  console.log('rendered UserList')
  return (
    <>
    <h1 className='mb-10 ml-20'>Users({people.length})</h1>
      <ul role="list" className="divide-y flex flex-wrap ml-20 divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between w-1/3 gap-x-6 py-5">
          <div className="flex gap-x-4 ">
            <img className="h-12 w-12 flex-none rounded-full object-cover bg-gray-50" src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png" alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-white">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-white">{person.email}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}

export default UserList
