import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div style={styles.card}>
      <h3>{recipe.name}</h3>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Cooking Time:</strong> {recipe.time} minutes</p>
      <Link to={`/recipe/${recipe.id}`} style={styles.link}>View Recipe</Link>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px",
    width: "250px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "#007BFF",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default RecipeCard;
