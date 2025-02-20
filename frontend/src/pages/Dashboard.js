import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // ✅ Import the CSS

const Dashboard = () => {
  return (
    <nav className="dashboard-sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/choose-action">Home</Link></li>
        <li><Link to="/create">Create Recipe</Link></li>
        <li><Link to="/recipes">View Recipes</Link></li>
        <li><Link to="/favorites">Your Favorites</Link></li>
        <li><Link to="/profile">Your Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Dashboard;
