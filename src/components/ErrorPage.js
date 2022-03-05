import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/ErrorPage.scss'

const ErrorPage = () => {
  return (
    <section className="message-container">
      <h2 className='error-message'>Page not found. So sorry, that URL does not exist</h2>
  
    </section>
  )
}

export default ErrorPage;
