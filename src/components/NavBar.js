import React from "react";
import { Link } from 'react-router-dom'
import '../styling/NavBar.scss';
import PropTypes from 'prop-types';

const NavBar = ({ location }) => {
  let navLink;
  if (location === 'favorites' || location === "error-page" ) {
    navLink = <Link className="landing-page-link" to="/"><h1>Return Home »</h1></Link>
  } else {
    navLink = <Link className="favorites-link" to="/favorites"><h1>Your Favorites »</h1></Link>
  }
  return (
    <nav className="nav-bar">
      <Link className="header-link" to="/">
        <h1 className='header-text'>Fussy Foodie</h1>
      </Link>
      {navLink}
    </nav>
  )
}

export default NavBar;

NavBar.propTypes = {
  location: PropTypes.string
}