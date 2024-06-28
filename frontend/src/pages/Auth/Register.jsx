import React from "react";
import { Link } from "react-router-dom";
import './Register.css'
const Register = () => {
  console.log('rendered Register')
  return (
    <>
      <div className="right-box">
        <div className="signup-box">
          <div className="signup-input">
            <h1>Register</h1>
            <div className="name-input">
              <label htmlFor="name">Name</label><br />
              <input type="text" id="name" placeholder="Enter Name" />
            </div>
            <div className="email-input">
              <label htmlFor="email">Email Address</label><br />
              <input type="email" id="email" placeholder="Email Address" />
            </div>
            <div className="password-input">
              <label htmlFor="password">Password</label><br />
              <input type="password" id="password" placeholder="Enter Password" />
            </div>
            <div className="cnf-password-input">
              <label htmlFor="cnf-password">Confirm Password</label><br />
              <input type="password" id="cnf-password" placeholder="Confirm Password" />
            </div>
            
              <button onClick={(e)=>console.log(e)} className="signup-button">Register</button>
            
            <div className="new-user">
              Already Have an Account ?<Link className="Link" to="/login">Login</Link>
            </div>
          </div>
          <div className="signup-image ">
              <img src="https://images.unsplash.com/photo-1576502200916-3808e07386a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80" alt=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
