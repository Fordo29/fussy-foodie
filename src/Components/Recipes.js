import React from "react";
import RecipeCard from "./RecipeCard";
import '../Styling/Recipes.scss'

const Recipes = ({ allRecipes }) => {
  const recipeCards = allRecipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        recipeImage={recipe.image}
      />
    )
  })
  return (
    <section>
      <h1>recipe container</h1>
    </section>
  )
}

export default Recipes;