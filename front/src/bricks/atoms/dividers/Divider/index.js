import React from 'react'
import PropTypes from 'prop-types'

import './Divider.scss'

const Divider = ({ variant, opacity }) => <div className={`divider divider--${variant}`} style={{ opacity }} />

Divider.propTypes = {
  /** Divider color. */
  variant: PropTypes.string,
  /** Divider opacity. */
  opacity: PropTypes.string
}

Divider.defaultProps = {
  variant: 'neutral-1-20',
  opacity: '1'
}

export default Divider
