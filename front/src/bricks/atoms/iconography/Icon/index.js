import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import './Icon.scss'
import { Spinner } from '../../..'

const Icon = ({ name, variant, loading }) =>
  loading ? <Spinner size="small" variant={variant} /> : <span className={`icon icon-${name} icon--${variant}`} />

Icon.propTypes = {
  /** Icon name. Class of icon is going to be <code>.icon .icon-name</code>*/
  name: PropTypes.string.isRequired,
  /** Variant color. Inherits color by default. */
  variant: PropTypes.string,
  /** Should the icon be replaced by a spinner. False by default **/
  loading: PropTypes.bool
}

Icon.defaultProps = {
  variant: 'inherit',
  loading: false
}

export default Icon
