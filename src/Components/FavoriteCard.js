import React from "react";
import { Link } from "react-router-dom"
import '../styling/FavoriteCard.scss'

const FavoriteCard = ({ recipeImage, title, id, recipe, removeFavorite}) => {
  return (
    <section className="recipe-card">
      <img className="recipe-cover" src={recipeImage} alt={`${title} cover`}/>
        <h2 className="book-title">{title}</h2>
      <button className="unfavorite-button" onClick={() => removeFavorite(id)}>Remove from Favorites</button>
      <Link key={id} to={`/${id}/selectedRecipe`} className="recipe-detail-link">Try It</Link>
    </section>
  )
}

export default FavoriteCard;