import React from "react";
import '../styling/SingleRecipeDetails.scss';

const SingleRecipeDetails = ({ recipe, determineFavButton }) => {
  
  let ingredientsList
  let directionsList
  if (recipe) {
    ingredientsList = recipe.ingredients.map(item => {
    return <li key={item}>{item}</li>})
  } else {
    return null
  }

  if (recipe) {
    directionsList = recipe.directions.map(item => {
      return <li className="direction-list" key={item}>{item}</li> })
  } else {
    return null
  }


  return (
    <section className="single-recipe-container">
      <section className="recipe-img-header">
        <img className="image-single-recipe" src={recipe.image} alt={`${recipe.title} cover`}/>
        <section className="recipe-title-cooking-info">
          <h2 className="recipe-header">{recipe.recipeTitle}</h2>
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
    </section>
  )
}

export default SingleRecipeDetails;
