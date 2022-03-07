import React from "react";
import RecipeCard from "./RecipeCard";
import '../styling/Recipes.scss'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
 let ranId = 29;

const Recipes = ({ recipes, addFavorite }) => {
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

  const randomizeRecipe = (recipes) => {
    const randomRecipe = recipes[Math.floor(Math.random()*recipes.length)];
    ranId = randomRecipe.id
    return ranId
  }

  return (
    <section>
      <section className="fun-random-section">
        <h3 className="tagline-random-recipe">Up for a food adventure?</h3>
        <Link to={`/${ranId}/selectedRecipe`}><button className="randomizer-btn" onClick={() => randomizeRecipe(recipes)}>Randomize your dinner!</button></Link>
      </section>
    <section className="recipes-container">
      {recipeCards}
    </section>
    </section>
  )
}

export default Recipes;

Recipes.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    recipeImage: PropTypes.string,
    recipe: PropTypes.object,
    favoriteBtn: PropTypes.func
  }))
}