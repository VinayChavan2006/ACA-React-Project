import React from "react";
import { MdDone } from "react-icons/md";
import { useSelector } from "react-redux";

const ProgressSteps = ({step2,step3} ) => {
  const {userInfo} = useSelector(state=>state.auth)
  const step1 = userInfo
  console.log("rendered ProgressSteps");
  return (
    <>
      <div className="w-1/2 h-fit p-2 pl-16 pr-16 mt-4 flex justify-between items-center">
        <div className="flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full ${step1?'bg-green-500 text-white':'bg-white text-black'} font-bold text-xl box-border flex items-center justify-center`}>
            {step1? <MdDone /> : 1}

          </div>
          <p className={`${step1?'text-green-500':'text-white'} text-sm`}>Login</p>
        </div>
        <div className={`${step1?'bg-green-400':'bg-white'} w-[60px]  h-1 mb-5`}></div>
        <div className="flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full ${step2?'bg-green-500 text-white':'bg-white text-black'} font-bold text-xl box-border flex items-center justify-center`}>
            {step2?<MdDone />:'2'}
          </div>
          <p className={`${step2?'text-green-500':'text-white'} text-sm`}>Shipping</p>
        </div>
        <div className={`${step2?'bg-green-400':'bg-white'} w-[60px]  h-1 mb-5`}></div>
        <div className="flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full ${step3?'bg-green-500 text-white':'bg-white text-black'} font-bold text-xl box-border flex items-center justify-center`}>
            {step3?<MdDone />:'3'}
          </div>
          <p className={`${step3?'text-green-500':'text-white'} text-sm`}>Summary</p>
        </div>
      </div>
    </>
  );
};

export default ProgressSteps;
