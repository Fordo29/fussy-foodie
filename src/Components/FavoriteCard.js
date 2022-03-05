import React from "react";
import { Link } from "react-router-dom"
import '../styling/FavoriteCard.scss'

const FavoriteCard = ({ recipeImage, title, id, removeFavorite}) => {
  return (
    <section className="recipe-card">
      <img className="recipe-cover" src={recipeImage} alt={`${title} cover`}/>
        <h2 className="recipe-title">{title}</h2>
      <Link key={id} to={`/${id}/selectedRecipe`} className="recipe-detail-link">Try It</Link>
      <button className="unfavorite-button" onClick={() => removeFavorite(id)}>Remove from Favorites</button>
    </section>
  )
}

export default FavoriteCard;