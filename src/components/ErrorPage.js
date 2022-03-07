import React from 'react'
import '../styling/ErrorPage.scss'

const ErrorPage = () => {
  return (
    <section className="message-container">
      <h2 className='error-message'>Page not found.<br/>Please click the logo to go back home and try your selection again.</h2>
    </section>
  )
}

export default ErrorPage;
