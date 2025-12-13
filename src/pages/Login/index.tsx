import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate()
  return (
  <div className="login-page">
     <div className="login-container">
      <div className="login-header">
        <h1>Welcome Back</h1>
        <p>Please login to your account</p>
      </div>

      <div className="form-group">
        <label>Username</label>
        <input type="text" id="username" placeholder="Enter your username" />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>

      <button className="login-btn" onClick={()=>navigate('/')}>Login</button>

      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  </div>
  );
}
export default Login;
