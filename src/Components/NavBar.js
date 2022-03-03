import React from "react";
import { Link } from 'react-router-dom'
import '../Styling/NavBar.scss'

const NavBar = ({ location }) => {
  let navLink;
  if (location === 'favorites') {
    navLink = <Link className="landing-page-link" to="/"><h1>Return Home »</h1></Link>
  } else {
    navLink = <Link className="favorites-link" to="/favorites"><h1>Your Favorites »</h1></Link>
  }
  return (
    <nav className="nav-bar">
      <Link className="header-link" to="/">
        <h1 className='header-text'>Rebellious Recipes</h1>
      </Link>
      {navLink}
    </nav>
  )
}

export default NavBar;