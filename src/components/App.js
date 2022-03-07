import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import Recipes from './Recipes';
import getData from '../apiCalls';
import SingleRecipe from './SingleRecipe';
import Favorites from './Favorites'
import ErrorPage from './ErrorPage'
import Footer from './Footer'
import FooterDetails from './FooterDetails';
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
    if(!this.state.favorites.includes(findRecipe)) {
      this.setState({ favorites: [...this.state.favorites, findRecipe] });
    } else {
      this.setState({...this.state})
    }
  }

  removeFavorite = (favId) => {
    const unfav = this.state.recipes.find(recipe => recipe.id === favId)
    const filteredFavs = this.state.favorites.filter(fav => fav.id !== unfav.id);
    this.setState({ favorites: filteredFavs });
  }

 
    

  render() {
    return (
      <main className="main-container">
        <Switch>
          <Route exact path='/' render={({ match }) => { 
            return [<NavBar location="landingPage" key={match + '-nav'}/>, <Recipes key={match + '-recipes'} recipes={this.state.recipes} addFavorite={this.addFavorite} />]
          }}/>
          <Route exact path='/:id/selectedRecipe' render={({ match }) => {
            return [<NavBar location="landingPage" key={match + '-nav'}/>, <SingleRecipe key={match.params.id} id={match.params.id}  />]
        }}/>
          <Route exact path='/favorites' render={({ match }) => {
            return [<NavBar location="favorites" key={match + '-nav'}/>, <Favorites key={match + '-favorites'} favorites={this.state.favorites} removeFavorite={this.removeFavorite} />]
        }}/>
          <Route exact path='/footerStory' render={({match}) => {
            return [<NavBar location="footer-page" key={match + '-nav'}/>, <FooterDetails key={match + '-footer'}/>]}}/>
          <Route render={() => {
            return [<NavBar location="error-page" key={Date.now() + '-nav'}/>, <ErrorPage />]}}/>
        </Switch>
        <Footer />
      </main>
    )
  }
}

export default App;
