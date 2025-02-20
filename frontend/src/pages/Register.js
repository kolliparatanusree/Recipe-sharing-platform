import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";  // ✅ Import the CSS file

const Register = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>  {/* ✅ Hyperlink to Login */}
    </div>
  );
};

export default Register;
