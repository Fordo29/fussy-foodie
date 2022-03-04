import React from "react";
import FavoriteCard from "./FavoriteCard";
import '../styling/FavoritesContainer.scss'

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