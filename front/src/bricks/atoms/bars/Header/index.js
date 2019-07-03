import React from 'react'
import PropTypes from 'prop-types'
import { Logo } from '../../..'
import './Header.scss'

const Header = ({ children, logo, onLogoClick, fullHeight, style }) => {
  const logoClickableClass = onLogoClick ? ' header--logo--clickable' : ''
  const fullHeightLogoClass = fullHeight ? ' header--logo--full-height' : ''
  return (
    <div className="header" style={style}>
      <div className={`header--logo${logoClickableClass}${fullHeightLogoClass}`} onClick={onLogoClick}>
        {logo || <Logo variant="white" />}
      </div>
      <div className="header--content">{children}</div>
    </div>
  )
}

Header.propTypes = {
  /** Content */
  children: PropTypes.node,
  logo: PropTypes.node,
  /** onClick function. Triggered when logo is clicked. */
  onLogoClick: PropTypes.func,
  /** Define wether the content of header should be full height (height: 100%;). Used for logo specifically. */
  fullHeight: PropTypes.bool,
  /** Custom styles **/
  style: PropTypes.object
}
Header.defaultProps = {
  children: ''
}

export default Header
