import React from "react";
import { Link } from "react-router-dom";
import './Login.css'
const Login = () => {
  console.log('rendered Login')
  return (
    <>
      <div className="right-box">
        <div className="login-box">
          <div className="login-input">
            <h1>Log In</h1>
            <div className="email-input">
              <label htmlFor="email">Email Address</label><br />
              <input type="email" id="email" placeholder="Email Address" />
            </div>
            <div className="password-input">
              <label htmlFor="password">Password</label><br />
              <input type="password" id="password" placeholder="Enter Password" />
            </div>
            
              <button className="login-button">Log In</button>
            
            <div className="new-user">
              New Customer?<Link className="Link" to="/register">Register</Link>
            </div>
          </div>
          <div className="login-image ">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" alt=""/>
          </div>
        </div>
      </div>
      
      

    </>
  );
};

export default Login;
