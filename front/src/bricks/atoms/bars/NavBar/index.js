import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../..'
import './NavBar.scss'

const NavBar = ({ title, iconLeft, iconRight, variant, iconLeftAction, iconRightAction, style }) => {
  const handleLeftClick = () => iconLeftAction()
  const handleRightClick = () => iconRightAction()
  return (
    <div className={`navbar navbar--${variant}`} style={style}>
      {iconLeft !== '' && (
        <div className="navbar--icon navbar--icon-left" onClick={handleLeftClick}>
          <Icon name={iconLeft} />
        </div>
      )}
      <div className="navbar--title">{title}</div>
      {iconRight !== '' && (
        <div className="navbar--icon navbar--icon-right" onClick={handleRightClick}>
          <Icon name={iconRight} />
        </div>
      )}
    </div>
  )
}

NavBar.propTypes = {
  /** Title of NavBar. Should be a string or a node. */
  title: PropTypes.node.isRequired,
  /** Left icon name. */
  iconLeft: PropTypes.string,
  /** Right icon name. */
  iconRight: PropTypes.string,
  /** Left icon action. */
  iconLeftAction: PropTypes.func,
  /** Right icon action. */
  iconRightAction: PropTypes.func,
  /** Variant style of NavBar. */
  variant: PropTypes.string,
  /** Custom styles **/
  style: PropTypes.object
}
NavBar.defaultProps = {
  iconLeft: '',
  iconRight: '',
  iconLeftAction: () => {},
  iconRightAction: () => {},
  variant: 'primary-1'
}
export default NavBar
