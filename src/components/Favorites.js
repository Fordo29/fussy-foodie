import React, { Component } from "react";
import FavoritesContainer from "./FavoritesContainer";
import '../styling/Favorites.scss';

const Favorites = (props) => {

  return (
    <section>
      {!props.favorites.length && <h2 className="empty-favorites-msg">You haven't added any favorites yet! Go find some favorites!</h2>}
     <FavoritesContainer favorites={props.favorites} removeFavorite={props.removeFavorite}/> 
    </section>
     
  )
}

export default Favorites;
