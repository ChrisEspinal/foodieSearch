import React, { useState } from "react";
import RecipeSpecifics from "./RecipeSpecifics";


const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);

  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div>

      <h2>{label}</h2>
      <img src={image} alt={label} />
      <br/>
      <a href={url} target="_blank" rel="noopener noreferrer">Click Here For Recipe</a>
      <br/>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeSpecifics ingredients={ingredients} />}

    </div>
  );
};

export default Recipe;