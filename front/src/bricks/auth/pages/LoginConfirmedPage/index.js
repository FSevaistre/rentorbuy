import React from 'react'
import PropTypes from 'prop-types'
import './LoginConfirmedPage.scss'

const LoginConfirmedPage = ({ email, img }) => {
  return (
    <div className="login-confirmed-page">
      <div className="login-confirmed-page--mail">
        {img}
        <div className="login-confirmed-page--mail--decoration" />
      </div>
      <h1>Vérifiez votre boite mail</h1>
      <p>
        Nous venons de vous envoyer un mail à <strong>{email}</strong> pour valider votre adresse mail.
      </p>
      <p>
        Rendez-vous dans votre boite mail et <strong>cliquez sur le lien</strong> pour continuer.
      </p>
    </div>
  )
}

LoginConfirmedPage.propTypes = {
  img: PropTypes.any,
  email: PropTypes.string
}

export default LoginConfirmedPage
