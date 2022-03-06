import React, { Component } from "react";
import '../styling/SingleRecipe.scss';
import getData from "../apiCalls";
import SingleRecipeDetails from "./SingleRecipeDetails";
import ErrorPage from "./ErrorPage";
import PropTypes from 'prop-types';

class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSingleRecipe: false,
      selectedRecipe: '',
      isFavoritedRecipe: false,
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
    const errorCheck = this.state.error ? <ErrorPage /> :  <SingleRecipeDetails urlId={this.props.id} recipe={this.state.recipe} addFav={this.props.addFavorite} removeFav={this.props.removeFavorite} />
    return (
      <section className="single-recipe-page">
       {errorCheck}
      </section>
    )
  }
}
export default SingleRecipe;

SingleRecipe.propTypes = {
  props: PropTypes.number
}