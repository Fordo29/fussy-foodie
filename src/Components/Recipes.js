import React from "react";
import RecipeCard from "./RecipeCard";
import '../Styling/Recipes.scss'

const Recipes = ({ recipes }) => {
  let recipeCards;
  if(recipes) {
  recipeCards = recipes.map(recipe => {
    return (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        title={recipe.recipeTitle}
        recipeImage={recipe.image}
      />
    )
  })
  } else {
    return null
  }
  return (
    <section className="recipes-container">
      {recipeCards}
    </section>
  )
}

export default Recipes;