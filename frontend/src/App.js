import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateRecipe from "./pages/CreateRecipe";
import RecipeList from "./pages/RecipeList";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import ShareRecipe from "./pages/ShareRecipe";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="app-layout">
        <Navbar onSearch={handleSearch} />
        <div className="main-container">
          <Dashboard />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/create" element={<CreateRecipe />} />
              <Route path="/recipes" element={<RecipeList searchTerm={searchTerm} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/home" element={<Home />} />
              <Route path="/share" element={<ShareRecipe />} />
              <Route path="/choose-action" element={<Navigate to="/recipes" />} />
            </Routes>
          </div>
        </div>
      </div>
      <style>{`
        .app-layout {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }

        .main-container {
          display: flex;
          flex: 1;
        }

        .content-container {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color:rgb(57, 57, 57);
          color: white;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
        }

        .navbar input {
          padding: 8px;
          border: none;
          border-radius: 5px;
          width: 300px;
        }

        .dashboard {
          position: fixed;
          top: 60px;
          left: 0;
          width: 250px;
          height: calc(100vh - 60px);
          background-color: #333;
          color: white;
          padding: 20px;
          overflow-y: auto;
        }

        .content-container {
          margin-left: 270px;
          margin-top: 60px;
        }
      `}</style>
    </Router>
  );
};

export default App;
