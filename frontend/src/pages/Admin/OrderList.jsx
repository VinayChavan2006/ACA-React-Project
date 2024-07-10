import React, { useState } from "react";
import { useOutletContext } from "react-router";
import {useGetOrdersQuery} from '../../redux/api/orderApiSlice'
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const OrderList = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();
  const { AllProduct } = useOutletContext();
  const [orderList, setOrderList] = useState(AllProduct);
  console.log("rendered OrderList");
  return (
    <>
      {/* {orderList.map((product) => (
        <h1>{product.name}</h1>
      ))} */}
       {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error.error}</Message>
      ) : (
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-center">
            {/* Admin Menu */}
            <div className="mb-6 md:mr-4">
              <AdminMenu />
            </div>

            {/* Order List Table */}
            <div className="w-full md:w-3/4 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Order List</h2>
              <table className="w-full bg-gray-700 rounded-lg overflow-hidden border-collapse">
                <thead className="bg-gray-600 rounded-t-lg">
                  <tr>
                    <th className="py-2 pl-2 text-center border-r border-gray-600">Image</th>
                    <th className="py-2 pl-2 text-center border-r border-gray-600">ID</th>
                    <th className="py-2 pl-2 text-center border-r border-gray-600">User</th>
                    <th className="py-2 pl-2 text-center border-r border-gray-600">Date</th>
                    <th className="py-2 pl-2 text-center border-r border-gray-600">Total</th>
                    <th className="py-2 pl-2 text-center border-r border-gray-600">Paid</th>
                    <th className="py-2 pl-2 text-center border-r border-gray-600">Delivered</th>
                    <th className="py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order._id}
                      className="border-b border-gray-600 hover:bg-gray-600 transition-colors duration-300"
                    >
                      <td className="py-2 text-center border-r border-gray-600">
                        <img
                          src={order.orderItems[0].image}
                          alt={order.orderItems[0].name}
                          className="w-14 h-14 object-cover rounded-full mx-auto"
                        />
                      </td>
                      <td className="py-2 text-center border-r border-gray-600">{order._id}</td>
                      <td className="py-2 text-center border-r border-gray-600">{order.user ? order.user.username : "N/A"}</td>
                      <td className="py-2 text-center border-r border-gray-600">{order.createdAt ? order.createdAt.substring(0, 10) : "N/A"}</td>
                      <td className="py-2 text-center border-r border-gray-600">$ {order.totalPrice}</td>
                      <td className="py-2 text-center border-r border-gray-600">
                        <p
                          className={`p-1 m-auto text-center w-24 rounded-lg font-semibold ${
                            order.isPaid ? "bg-green-400 text-black" : "bg-red-500 text-white"
                          }`}
                        >
                          {order.isPaid ? "Paid" : "Pending"}
                        </p>
                      </td>
                      <td className="py-2 text-center border-r border-gray-600">
                        <p
                          className={`p-1 m-auto text-center w-24 rounded-lg font-semibold ${
                            order.isDelivered ? "bg-green-400 text-black" : "bg-red-500 text-white"
                          }`}
                        >
                          {order.isDelivered ? "Delivered" : "Pending"}
                        </p>
                      </td>
                      <td className="py-2 text-center">
                        <Link to={`/order/${order._id}`}>
                          <button
                            className="bg-pink-600 text-white py-1 px-2 rounded-lg hover:bg-pink-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                          >
                            More
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    
    </>
  );
};

export default OrderList;
