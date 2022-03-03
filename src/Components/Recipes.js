import React from "react";
import RecipeCard from "./RecipeCard";
import '../Styling/Recipes.scss'

const Recipes = ({ recipes }) => {
  const recipeCards = recipes.map(recipe => {
    console.log(recipe)
    return (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        title={recipe.recipeTitle}
        recipeImage={recipe.image}
      />
    )
  })
  return (
    <section className="recipes-container">
      {recipeCards}
    </section>
  )
}

export default Recipes;