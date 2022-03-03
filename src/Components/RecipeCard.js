import React from "react";
import { Link } from "react-router-dom"
import '../Styling/RecipeCard.scss'

const RecipeCard = ({ recipeImage, title, id}) => {
  return (
    <section className="recipe-card">
      <img className="recipe-cover" src={recipeImage} alt={`${title} cover`}/>
        <h2 className="book-title">{title}</h2>
      
      <Link key={id} to={`/${id}/selectedRecipe`} className="recipe-detail-link">Try It</Link>
    </section>
  )
}

export default RecipeCard;