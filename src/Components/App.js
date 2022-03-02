import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import Recipes from './Recipes';

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
