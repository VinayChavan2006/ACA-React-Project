import React from "react";

const Profile = () => {
  return (
    <>
      {/* <div className="w-screen min-h-screen bg-gray-950 ml-[58px] ">
        
        <div className="flex flex-col justify-between p-3">
          <h1 className='text-center'>Update Profile</h1>

        </div>
      </div> */}
      <div className="w-screen min-h-screen bg-gray-950 ml-[58px] flex justify-center items-center">
        <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">
            Update Profile
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                defaultValue=""
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                defaultValue=""
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                defaultValue=""
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                defaultValue=""
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition duration-200 ease-in-out"
              >
                Update
              </button>
              <a
                className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition duration-200 ease-in-out"
                href="/user-orders"
              >
                My Orders
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
