import React from "react";

const Ratings = () => {
  console.log("rendered Ratings");
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar style={{ color: "yellow" }} />
      ))}
    </div>
  );
};

export default Ratings;
