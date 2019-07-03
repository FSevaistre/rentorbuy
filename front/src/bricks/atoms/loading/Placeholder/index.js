import React from 'react'
import PropTypes from 'prop-types'
import './Placeholder.scss'

const Placeholder = ({ variant, className }) => <div className={`placeholder placeholder--${variant} ${className}`} />

Placeholder.propTypes = {
  /** Placeholder color. */
  variant: PropTypes.string,
  className: PropTypes.string
}

Placeholder.defaultProps = {
  variant: 'neutral-1-l'
}

export default Placeholder
