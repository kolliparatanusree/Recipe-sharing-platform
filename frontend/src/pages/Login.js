import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";  // ✅ Import the CSS file

const Login = () => {
  const navigate = useNavigate();  // ✅ Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/recipes");  // ✅ Redirect after login
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register Now</Link></p>
    </div>
  );
};

export default Login;
