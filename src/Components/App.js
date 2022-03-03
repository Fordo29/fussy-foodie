import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import Recipes from './Recipes';
import getData from '../apiCalls';

import '../Styling/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      isSingleRecipt: false,
      recipe: '',
      error: ''
    }
  }

  componentDidMount = () => {
    getData()
      .then(recipesData => {
        this.setState({ recipes: recipesData.foods})
      })
      .catch(error => this.setState({ error: error.message}))
  }

  displayHomePage = () => {
    this.setState({ isSingleRecipe: false })
  }


  render() {

    return (
      <main className="main-container">
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => <Recipes recipes={this.state.recipes}  />}/>
        </Switch>
      </main>
    )
  }
}

export default App;
