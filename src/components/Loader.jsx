import React from "react";

const Loader = () => {
  console.log("rendered Loader");
  return (
    <>
      <div className="animate-spin w-16 h-16 ml-32 bg-pink-200  rounded-full border-4 border-b-pink-500 border-l-purple-500 border-r-purple-500 border-t-transparent">
      </div>
    </>
  );
};

export default Loader;
