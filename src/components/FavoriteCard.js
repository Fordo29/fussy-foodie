import React from "react";
import { Link } from "react-router-dom"
import '../styling/FavoriteCard.scss';
import PropTypes from 'prop-types';

const FavoriteCard = ({ recipeImage, title, id, removeFavorite}) => {
  return (
    <section className="favorite-card">
      <img className="favorite-recipe-cover" src={recipeImage} alt={`${title} cover`}/>
        <h2 className="favorite-recipe-title">{title}</h2>
      <Link key={id} to={`/${id}/selectedRecipe`} className="favorite-recipe-detail-link">Try It</Link>
      <button className="unfavorite-button" onClick={() => removeFavorite(id)}>Remove from Favorites</button>
    </section>
  )
}

export default FavoriteCard;

FavoriteCard.propTypes = {
  recipeImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeFavorite: PropTypes.func.isRequired
}