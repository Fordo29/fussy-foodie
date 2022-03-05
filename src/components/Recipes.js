import React from "react";
import RecipeCard from "./RecipeCard";
import '../styling/Recipes.scss'

const Recipes = ({ recipes, addFavorite}) => {
  let recipeCards;
  if(recipes) {
  recipeCards = recipes.map(recipe => {
    return (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        title={recipe.recipeTitle}
        recipeImage={recipe.image}
        recipe={recipe}
        favoriteBtn={addFavorite}
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
