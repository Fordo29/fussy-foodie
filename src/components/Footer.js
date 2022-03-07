import React from "react";
import '../styling/Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <div className="footer">
    <Link to='/footerStory'><h1>Click here to learn more about the inspiration for this application</h1></Link>
  </div>

  )
};

export default Footer;