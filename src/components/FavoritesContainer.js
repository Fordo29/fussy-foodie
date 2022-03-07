import React from "react";
import FavoriteCard from "./FavoriteCard";
import '../styling/FavoritesContainer.scss';
import PropTypes from 'prop-types';

const FavoritesContainer = ({ favorites, removeFavorite}) => {
  let favoriteCards;
  if(favorites) {
  favoriteCards = favorites.map(recipe => {
    return (
      <FavoriteCard
        key={recipe.id}
        id={recipe.id}
        title={recipe.recipeTitle}
        recipeImage={recipe.image}
        removeFavorite={removeFavorite}
      />
    )
  })
  } else {
    return null
  }
  return (
    <section className="favorites-container">
      {favoriteCards}
    </section>
  )
}

export default FavoritesContainer;

FavoritesContainer.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    recipeImage: PropTypes.string,
    recipe: PropTypes.object,
    removeFavorite: PropTypes.func
  }))
}