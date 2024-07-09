import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
import Loader from '../../components/Loader'
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/api/usersApiSlice";
import axios from 'axios'
import { setCredentials } from "../../redux/features/auth/authSlice"
import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    try {
      console.log('Fetching ...')
      const response = await login(formData)
      console.log(response.data,!response.data)
      if(!response.data){
        throw new Error('Invalid Credentials')
      }
      console.log('fetched')
      dispatch(setCredentials({...response}))
      toast.success('Logged In Successfully')
        navigate('/')
      console.log(response.data);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  console.log("rendered Login");
  return (
    <>
      <div className="right-box">
        <div className="login-box">
          <div className="login-input">
            <h1>Log In</h1>
            <div className="email-input">
              <label htmlFor="email">Email Address</label>
              <br />
              <input type="email" name="email" onChange={handleChange} id="email" placeholder="Email Address" />
            </div>
            <div className="password-input">
              <label htmlFor="password">Password</label>
              <br />
              <input
                onChange={handleChange}
                name="password"
                type="password"
                id="password"
                placeholder="Enter Password"
              />
            </div>

            <button type="submit" onClick={handleSubmit} className="login-button">Log In</button>

            <div className="new-user">
              New Customer?
              <Link className="Link" to="/register">
                Register
              </Link>
            </div>
          </div>
          <div className="login-image ">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
