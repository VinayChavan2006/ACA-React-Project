import React from "react";
import { MdDone } from "react-icons/md";
import { useLocation } from "react-router";
import ProgressSteps from "../../components/ProgressSteps";
const PlaceOrder = () => {
  const { state } = useLocation();
  console.log(state);
  
  console.log("rendered PlaceOrder");
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-950 flex flex-col items-center justify-between">
        <ProgressSteps step3='true' step2='true'/>
        <div className="container mx-auto mt-8">
          <div className="bg-gray-800 rounded-lg p-6 mt-4">
            <h1 className="text-2xl font-bold text-center text-white mb-6">
              Order Summary
            </h1>
            { !state ? (
              <h1 className="text-center">Cart is Empty!</h1>
            ) : (
              <table className="w-full bg-gray-900 rounded-lg overflow-hidden border-separate">
                <thead className="bg-gray-700 text-white">
                  <tr>
                    <th className="py-3 px-4">Image</th>
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {state.cartItems.map((p) => (
                    <tr className="border-b border-gray-700 text-white hover:bg-gray-700 transition duration-200">
                      <td className="py-2 px-4 flex justify-center">
                        <img
                          src={p.item.imgUrl}
                          alt={p.item.name}
                          className="w-16 h-16 object-cover"
                        />
                      </td>
                      <td className="py-2 px-4  text-center text-pink-500">
                        {p.item.name}
                      </td>
                      <td className="py-2 px-4  text-center">{p.quantity}</td>
                      <td className="py-2 px-4  text-center">
                        ${p.item.price}
                      </td>
                      <td className="py-2 px-4  text-center">
                        ${p.item.price * p.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-5 text-white">
              Summary Details
            </h2>
            <div className="flex justify-between flex-wrap p-8 bg-gray-900 rounded-lg shadow-lg">
              <ul className="text-lg text-white">
                <li>
                  <span className="font-semibold">Items: </span> {state?.cartItems?.length}
                </li>
                <li>
                  <span className="font-semibold">Shipping:</span> $ 0.00
                </li>
                <li>
                  <span className="font-semibold">Tax:</span> ${" "}
                  {(Number(state?.Total) * 15) / 100}
                </li>
                <li>
                  <span className="font-semibold">Total:</span> ${" "}
                  {state?.Total + (state?.Total * 15) / 100}
                </li>
              </ul>
              <div className="text-white">
                <h2 className="text-2xl font-semibold mb-4">Shipping</h2>
                <p>
                  <strong>Address:</strong> {state?.address}, {state?.city}{" "}
                  {state?.postalCode}, {state?.country}
                </p>
              </div>
              <div className="text-white">
                <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
                <strong>Method:</strong> PayPal
              </div>
            </div>
            <button
              type="button"
              className="bg-pink-500 hover:bg-pink-600 text-white mb-4 py-2 px-4 rounded-lg text-lg w-full mt-4"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
