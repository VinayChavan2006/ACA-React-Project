import React, { useState, useEffect } from "react";
import { useNavigate, redirect, useOutletContext } from "react-router";
import {
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import "./Navigation.css";

const Navigation = ({ cartItems,favItems }) => {
  const [selectedTab, setSelectedTab] = useState("home");
  
  const navigate = useNavigate();
  console.log("rendered Navigation");
  return (
    <>
      <div className="side-bar">
        <div className="upper-icons ">
          <div
            id="home"
            className={selectedTab === "home" && "text-pink-600"}
            onClick={() => {
              setSelectedTab("home");
              navigate("/");
            }}
          >
            <FaHome />
            <p>Home</p>
          </div>
          <div
            id="shop-bag"
            className={selectedTab === "shop" && "text-pink-600"}
            onClick={() => {
              setSelectedTab("shop");
              navigate("/shop");
            }}
          >
            <FaShoppingBag />
            <p>Shop</p>
          </div>
          <div
            id="cart"
            className={selectedTab === "cart" && "text-pink-600"}
            onClick={() => {
              navigate("/cart");
              setSelectedTab("cart");
            }}
          >
            {cartItems.length !== 0 && (
              <div className="cart-pending-number">{cartItems.length}</div>
            )}
            <FaShoppingCart />
            <p>Cart</p>
          </div>
          <div
            id="favorite"
            className={selectedTab === "favorite" && "text-pink-600"}
            onClick={() => {
              navigate("/favorite");
              setSelectedTab("favorite");
            }}
          >
            {favItems.length !== 0 && (
              <div className="fav-pending-number">{favItems.length}</div>
            )}
            <FaHeart />
            <p>Favorites</p>
          </div>
        </div>
        <div className="lower-icons">
          <div
            id="login"
            className={selectedTab === "login" && "text-pink-600"}
            onClick={() => {
              navigate("/login");
              setSelectedTab("login");
            }}
          >
            <IoMdLogIn />
            <p>Log In</p>
          </div>
          <div
            id="user"
            className={selectedTab === "user" && "text-pink-600"}
            onClick={() => {
              navigate("/register");
              setSelectedTab("user");
            }}
          >
            <FaUser />
            <p>User</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
