import React from "react";
import '../Styling/SingleRecipeDetails.scss';

const SingleRecipeDetails = ({urlId, recipe, addFav, removeFav, isFavoriteRecipe}) => {
  
  let ingredientsList
  let directionsList
  if (recipe) {
    ingredientsList = recipe.ingredients.map(item => {
    return <li key={item}>{item}</li>  })
  } else {
    return null
  }

  if (recipe) {
    directionsList = recipe.directions.map(item => {
      return <li className="direction-list" key={item}>{item}</li>
    })
  } else {
    return null
  }

  const determineFavButton = () => {
    if(isFavoriteRecipe === true) {
      isFavoriteRecipe = false
        return <button className="unfavorite-button" onClick={() => removeFav(urlId)}>Remove from Favorites</button>
      } else if (isFavoriteRecipe === false) {
        isFavoriteRecipe = true
        return <button className="favorite-button" onClick={() => addFav(recipe)}>Add to Favorites</button>
    }
  }
  return (
    <section className="single-recipe-container">
      <section className="recipe-img-header">
        <img className="image-single-recipe" src={recipe.image} alt={`${recipe.title} cover`}/>
        <section className="recipe-title-cooking-info">
          <h2>{recipe.recipeTitle}</h2>
          <section className="cooking-info-section">
            <section className="cooking-info">
              <h3>Cook Time:</h3>
              <p>{recipe.cookingTimeDetails}</p>
            </section>
            <section>
              <h3>Makes:</h3>
              <p>{recipe.servings}</p>
            </section>
          </section>
          <h3>Ingredients:</h3>
            {ingredientsList}
        </section>
      </section>
        <section>
          <h3>Directions:</h3>
          <ol>
            {directionsList}
          </ol>
          <h3>Nutrition Information:</h3>
          <p>For each serving of {recipe.nutritionDetails}</p>
        </section>
        {console.log("is this a thing", isFavoriteRecipe)}
        {determineFavButton()}
    </section>
  )
}

export default SingleRecipeDetails;