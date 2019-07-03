import React from 'react'
import PropTypes from 'prop-types'
import LogoGreen from '../../../assets/img/logo-green.svg'
import LogoWhite from '../../../assets/img/logo-white.svg'
import LogoDark from '../../../assets/img/logo-dark.svg'

import './Logo.scss'

const Logo = ({ variant, size }) => {
  let src
  switch (variant) {
    case 'green':
      src = LogoGreen
      break
    case 'white':
      src = LogoWhite
      break
    case 'dark':
      src = LogoDark
      break
    default:
      src = LogoGreen
  }
  return <img src={src} className={`pretto-logo pretto-logo--${size}`} alt="logo Pretto" />
}

Logo.propTypes = {
  /** Logo image size: <code>small</code>, <code>medium</code> or <code>large</code>. */
  size: PropTypes.string,
  /** Logo variants colors: <code>green</code>, <code>white</code> or <code>dark</code>. */
  variant: PropTypes.string
}

Logo.defaultProps = {
  size: 'medium',
  variant: 'green'
}

export default Logo
