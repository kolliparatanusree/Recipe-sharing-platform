import React, { useState } from "react";

const RecipeForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [ingredients, setIngredients] = useState(initialData?.ingredients || "");
  const [instructions, setInstructions] = useState(initialData?.instructions || "");
  const [category, setCategory] = useState(initialData?.category || "Dessert");
  const [time, setTime] = useState(initialData?.time || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { title, ingredients, instructions, category, time };
    onSubmit(newRecipe);
  };

  return (
    <div style={styles.container}>
      <h2>{initialData ? "Edit Recipe" : "Create Recipe"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Ingredients (comma-separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
        <input type="text" placeholder="Cooking Time (mins)" value={time} onChange={(e) => setTime(e.target.value)} required />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Dessert">Dessert</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <button type="submit">{initialData ? "Update Recipe" : "Add Recipe"}</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

export default RecipeForm;
