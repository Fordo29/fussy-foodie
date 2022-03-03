import React, { Component } from "react";
import Recipes from "./Recipes";
import '../styling/Favorites.scss';

const Favorites = (props) => {

  return (
    <section>
      {!props.favorites.length && <h2 className="empty-favorites-msg">You haven't added any favorites yet!</h2>}
     <Recipes recipes={props.favorites}/> 
    </section>
     
  )
}

export default Favorites;