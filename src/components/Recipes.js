import React from "react";
import RecipeCard from "./RecipeCard";
import '../styling/Recipes.scss'
import PropTypes from 'prop-types';

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

Recipes.propTypes = {
  addFavorite: PropTypes.func,
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    recipeImage: PropTypes.string,
    recipe: PropTypes.object,
    favoriteBtn: PropTypes.func
  }))
}