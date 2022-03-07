import React from "react";
import FavoritesContainer from "./FavoritesContainer";
import '../styling/Favorites.scss';
import PropTypes from 'prop-types';

const Favorites = ({favorites, removeFavorite}) => {

  return (
    <section>
      {!favorites.length && <h2 className="empty-favorites-msg">You haven't added any favorites yet! Go find some favorites!</h2>}
     <FavoritesContainer favorites={favorites} removeFavorite={removeFavorite}/> 
    </section>
     
  )
}

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.array,
  removeFavorite: PropTypes.func

}