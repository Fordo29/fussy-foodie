import React from "react";
import { Link } from "react-router-dom"
import '../styling/RecipeCard.scss'
import PropTypes from 'prop-types';

const RecipeCard = ({ recipeImage, title, id, recipe, favoriteBtn}) => {
  return (
    <section className="recipe-card">
        <img className="recipe-cover" src={recipeImage} alt={`${title} cover`}/>
        <h2 className="recipe-title">{title}</h2>
      <Link key={id} to={`/${id}/selectedRecipe`} className="recipe-detail-link">Try It!</Link>
        <button className="favorite-button" onClick={() => favoriteBtn(recipe)}>Add to Favorites</button>
    </section>
  )
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipeImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  favoriteBtn: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired
}