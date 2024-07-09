import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router";
import ProgressSteps from "../../components/ProgressSteps";
const Shipping = () => {
  const navigate = useNavigate()
  const {state} = useLocation()
  // console.log(state)

  const [addressData,setAddressData] = useState({
    address:'',
    city:'',
    postalCode:'',
    country:''
  })
  const handleChange = (e)=>{
    setAddressData({...addressData,[e.target.name]:e.target.value})
  }
  console.log("rendered Shipping");
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-950 flex flex-col items-center">
        <div className="w-4/5 rounded-md flex flex-col items-center p-3 min-h-fit bg-slate-800">
          <ProgressSteps step2='true'/>
          <div className="w-[50%] rounded-md box-border p-4 gap-5 h-fit flex flex-col justify-between bg-slate-700 text-white font-semibold">
            <h1 className="text-center">Shipping</h1>
            <label htmlFor="address">
              Address <br />
              <input
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
            <button onClick={()=>navigate('/placeorder',{state:{...state,...addressData}})} className="w-full rounded-md p-3 bg-pink-500 hover:bg-pink-600 transition-all font-semibold">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
