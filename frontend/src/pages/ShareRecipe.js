import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ShareRecipe.css";  // ✅ Import the CSS file

const ShareRecipe = () => {
  const [recipe, setRecipe] = useState({ title: "", description: "", ingredients: "", steps: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Recipe Shared: ${recipe.title}`);
    setRecipe({ title: "", description: "", ingredients: "", steps: "" });
  };

  return (
    <div className="share-recipe-container">
      <h2>Share Your Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={recipe.title}
          onChange={handleChange}
          required
        /><br></br>
        <textarea
          name="description"
          placeholder="Short Description"
          value={recipe.description}
          onChange={handleChange}
          required
        /><br></br>
        <textarea
          name="ingredients"
          placeholder="Ingredients (comma separated)"
          value={recipe.ingredients}
          onChange={handleChange}
          required
        /><br></br>
        <textarea
          name="steps"
          placeholder="Preparation Steps"
          value={recipe.steps}
          onChange={handleChange}
          required
        /><br></br>
        <button type="submit">Share Recipe</button>
      </form>
      <Link to="/recipes" className="back-link">View Recipes</Link>
    </div>
  );
};

export default ShareRecipe;
