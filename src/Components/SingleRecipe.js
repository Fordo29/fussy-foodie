import React, { Component } from "react";
import '../Styling/SingleRecipe.scss';
import getData from "../apiCalls";
import SingleRecipeDetails from "./SingleRecipeDetails";
import ErrorPage from "./ErrorPage";
import { match } from "check-types";


class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSingleRecipe: false,
      isFavoriteRecipe: false,
      recipe: '',
      error: ''
    }
  }

  
  componentDidMount = () => {
    getData(`foods/${this.props.id}`)
    .then(recipeData => {
      const recipeSelected = recipeData.recipe;
      this.setState({ recipe: recipeSelected, isSingleRecipe: true })
    })
    .catch(error => this.setState({ error: error.message }))
  }

  
  render() {
    const errorCheck = this.state.error ? <ErrorPage /> :  <SingleRecipeDetails urlId={this.props.id} recipe={this.state.recipe} addFav={this.props.addFavorite} removeFav={this.props.removeFavorite} isFavoriteRecipe={this.state.isFavoriteRecipe}/>
    return (
      <section className="single-recipe-page">
        {console.log("is fav are you there", this.state.isFavoriteRecipe)}
       {errorCheck}
      </section>
    )
  }
}
export default SingleRecipe;