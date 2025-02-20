import React from "react";
import RecipeForm from "../components/RecipeForm";
import "./CreateRecipe.css";  // Import CSS

const CreateRecipe = () => {
  const handleCreateRecipe = (recipe) => {
    alert(`New Recipe Added: ${recipe.title}`);
  };

  return (
    <div className="create-recipe-container">
      <RecipeForm onSubmit={handleCreateRecipe} />
    </div>
  );
};

export default CreateRecipe;
