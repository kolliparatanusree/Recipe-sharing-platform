import React from "react";
import { useParams } from "react-router-dom";
import RecipeForm from "../components/RecipeForm";

const EditRecipe = () => {
  const { id } = useParams();

  const sampleRecipe = {
    title: "Sample Recipe",
    ingredients: "Flour, Sugar, Eggs",
    instructions: "Mix ingredients and bake for 30 minutes.",
    category: "Dessert",
    time: "30",
  };

  const handleEditRecipe = (updatedRecipe) => {
    alert(`Recipe Updated: ${updatedRecipe.title}`);
  };

  return (
    <div>
      <RecipeForm onSubmit={handleEditRecipe} initialData={sampleRecipe} />
    </div>
  );
};

export default EditRecipe;
