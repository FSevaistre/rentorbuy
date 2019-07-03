import React from 'react'
import PropTypes from 'prop-types'
import { AlertTemplate, ConnectionCard } from '../../../index'
import './LoginPage.scss'

const LoginPage = ({ title, description, alert, alertKind, connectionCardProps }) => {
  return (
    <AlertTemplate title={title} description={description} alert={alert} alertKind={alertKind}>
      <div className="login-page">
        <ConnectionCard {...connectionCardProps} />
      </div>
    </AlertTemplate>
  )
}

LoginPage.propTypes = {
  description: PropTypes.node,
  title: PropTypes.string,
  alert: PropTypes.node,
  alertKind: PropTypes.string,
  connectionCardProps: PropTypes.object
}

export default LoginPage
