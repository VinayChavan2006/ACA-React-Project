import React, { useState } from "react";
import { useOutletContext } from "react-router";

const OrderList = () => {
  const { AllProduct } = useOutletContext();
  const [orderList, setOrderList] = useState(AllProduct);
  console.log("rendered OrderList");
  return (
    <>
      {orderList.map((product) => (
        <h1>{product.name}</h1>
      ))}
    </>
  );
};

export default OrderList;
