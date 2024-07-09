import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader'
import "./Register.css";
import axios from 'axios'
import { useDispatch } from "react-redux";
import {setCredentials} from '../../redux/features/auth/authSlice'
import { useRegisterMutation } from "../../redux/api/usersApiSlice";
const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [register, {isLoading, isError, isSuccess, error}] = useRegisterMutation()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword:""
  });
  const handleChange = (e) => {
    e.preventDefault()
    // console.log('change')
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    console.log('submit clicked')
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      console.log('pasword',formData.password,'cnfpass',formData.confirmPassword)
      toast.error('Passwords do not match')
      return
    }
    try {
      const response = await register(formData)
      if(response.error){
        console.log(response)
        toast.error(response.error.data)
        return
      }
      dispatch(setCredentials({...response}))
      toast.success('Registered Successfully')
      navigate('/')
      console.log(response);
    } catch (err) {
      toast.error('Unable to register');
      console.log(err);
    }
    
  };
  console.log("rendered Register");
  return (
    <>
      <div className="right-box">
        <div className="signup-box">
          <div className="signup-input">
            <h1>Register</h1>
            <div className="name-input">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                name="username"
                onChange={(e)=>handleChange(e)}
                id="name"
                placeholder="Enter Name"
              />
            </div>
            <div className="email-input">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                name="email"
                onChange={(e)=>handleChange(e)}
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="password-input">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                onChange={(e)=>handleChange(e)}
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="cnf-password-input">
              <label htmlFor="cnf-password">Confirm Password</label>
              <br />
              <input
                onChange={(e)=>handleChange(e)}
                name="confirmPassword"
                type="password"
                id="cnf-password"
                placeholder="Confirm Password"
              />
            </div>

            <button onClick={(e) => handleSubmit(e)} className="signup-button">
            {isLoading ? "Registering..." : "Register"}
            </button>
            {isLoading && <Loader className="mt-4" />}
            <div className="new-user">
              Already Have an Account ?
              <Link className="Link" to="/login">
                Login
              </Link>
            </div>
          </div>
          <div className="signup-image ">
            <img
              src="https://images.unsplash.com/photo-1576502200916-3808e07386a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
