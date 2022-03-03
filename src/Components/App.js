import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import Recipes from './Recipes';
import getData from '../apiCalls';
import SingleRecipe from './SingleRecipe';
import Favorites from './Favorites'
import ErrorPage from './ErrorPage'

import '../styling/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      isSingleRecipe: false,
      favorites: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getData('foods')
      .then(recipesData => {
        this.setState({ recipes: recipesData.foods})
      })
      .catch(error => this.setState({ error: error.message}))
  }

  displayHomePage = () => {
    this.setState({ isSingleRecipe: false })
  }

  addFavorite = (newRecipe) => {
    const findRecipe = this.state.recipes.find(recipe => recipe.id === newRecipe.id)
    if(!this.state.favorites.includes(findRecipe)){
      this.setState({favorites: [...this.state.favorites, findRecipe]  });
    } else {
      this.setState({...this.state})
    }
  }

  removeFavorite = (id) => {
    const unfav = this.state.recipes.find(recipe => recipe.id === id)
    const filteredFavs = this.state.favorites.filter(fav => fav.id !== unfav.id);
    this.setState({ favorites: filteredFavs });
  }


  render() {
    // console.log(this.state.favorites)
    return (
      <main className="main-container">
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => <Recipes recipes={this.state.recipes}  />}/>
          <Route exact path='/:id/selectedRecipe' render={({ match }) => <SingleRecipe id={match.params.id} addFavorite={this.addFavorite} removeFavorite={this.removeFavorite} isFavRecipe={this.state.isFavRecipe}/>}/>
          <Route exact path='/favorites' render={() => <Favorites favorites={this.state.favorites}/>}/>
          <Route render={() => <ErrorPage />}/>
        </Switch>
      </main>
    )
  }
}

export default App;
