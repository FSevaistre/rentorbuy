import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../../index'
import './ConnectionButton.scss'

class ConnectionButton extends Component {
  render() {
    const { onClick, variant } = this.props
    return (
      <div className={`connection-button connection-button--${variant}`} onClick={onClick}>
        <div className="connection-button--content">
          <Icon name="user-account" variant={variant} />
        </div>
      </div>
    )
  }
}

ConnectionButton.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.string
}

ConnectionButton.defaultProps = {
  variant: 'primary-1'
}

export default ConnectionButton
