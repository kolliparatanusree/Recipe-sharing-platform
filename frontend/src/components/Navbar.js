import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";  // ✅ Import the CSS file

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="navbar">
      <h1>Recipe Share</h1>
      <div>
        <Link to="/home">Home</Link>
        
        <Link to="/settings">Settings</Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </nav>
  );
};

export default Navbar;
