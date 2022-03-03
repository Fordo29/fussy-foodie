import React from 'react'
import { Link } from 'react-router-dom'
import '../Styling/ErrorPage.scss'

const ErrorPage = () => {
  return (
    <section className="message-container">
      <h2>Page not found</h2>
      <p>So sorry, that URL does not exist</p>
    </section>
  )
}

export default ErrorPage;