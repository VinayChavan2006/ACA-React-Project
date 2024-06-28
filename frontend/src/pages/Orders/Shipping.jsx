import React from "react";
import { MdDone } from "react-icons/md";
const Shipping = () => {
  console.log("rendered Shipping");
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-950 flex flex-col items-center">
        <div className="w-4/5 rounded-md flex flex-col items-center p-3 min-h-fit bg-slate-800">
          <div className="w-1/2 h-fit p-2 pl-16 pr-16 flex justify-between items-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white font-bold text-xl box-border flex items-center justify-center">
                <MdDone />
              </div>
              <p className="text-green-500 text-sm">Login</p>
            </div>
            <div className="w-[60px] bg-green-400 h-1 mb-5"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white font-bold text-xl p-1 box-border flex items-center justify-center">
                <MdDone />
              </div>
              <p className="text-green-500 text-sm">Shipping</p>
            </div>
            <div className="w-[60px] bg-green-400 h-1 mb-5"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-white text-gray-400 font-bold text-xl p-1 box-border flex items-center justify-center">
                3
              </div>
              <p className="text-white text-sm">Summary</p>
            </div>
            
          </div>
          <div className="w-[50%] rounded-md box-border p-4 gap-5 h-fit flex flex-col justify-between bg-slate-700 text-white font-semibold">
            <h1 className="text-center">Shipping</h1>
            <label htmlFor="address">
              Address <br />
              <input
                className="w-full rounded-md bg-slate-500 h-12 text-white placeholder-white"
                type="text"
                name="address"
                id="address"
                placeholder="Enter Address"
              />
            </label>
            <label htmlFor="city">
              City <br />
              <input
                className="w-full rounded-md bg-slate-500 h-12 text-white placeholder-white"
                type="text"
                name="city"
                id="city"
                placeholder="Enter City"
              />
            </label>
            <label htmlFor="postalCode">
              Postal Code <br />
              <input
                className="w-full rounded-md bg-slate-500 h-12 text-white placeholder-white"
                type="text"
                name="postalCode"
                id="postalCode"
                placeholder="Enter Postal Code"
              />
            </label>
            <label htmlFor="Country">
              Country <br />
              <input
                className="w-full rounded-md bg-slate-500 h-12 text-white placeholder-white"
                type="text"
                name="country"
                id="country"
                placeholder="Enter Country"
              />
            </label>
            <p>Payment Method</p>
            <label htmlFor="">
              <input type="radio" name="payment" id="payment" defaultChecked />
              PayPal or Credit Card
            </label>
            <button className="w-full rounded-md p-3 bg-pink-500 hover:bg-pink-600 transition-all font-semibold">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
