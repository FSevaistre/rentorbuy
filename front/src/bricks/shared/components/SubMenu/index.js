import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../../index'
import './SubMenu.scss'

const SubMenu = ({ active, actions, variant, format }) => {
  return (
    <div className="sub-menu--wrapper">
      <div className={`sub-menu sub-menu--${variant} sub-menu--${format}`}>
        {actions.map((action, index) => {
          const { label, onClick, icon } = action
          const buttonProps = { children: label, iconProps: icon && { name: icon, variant } }
          const isActive = active === index
          return (
            <div className={`sub-menu--item${isActive ? ' sub-menu--item--active' : ''}`} key={label} onClick={onClick}>
              <Button format="flat" {...buttonProps} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

SubMenu.propTypes = {
  /** Which action is active. You need to specify an index. */
  active: PropTypes.number,
  /** List of buttons. */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      onClick: PropTypes.func,
      icon: PropTypes.string
    })
  ).isRequired,
  /** Variant of label (hover) and icon (permanent). */
  variant: PropTypes.string,
  /** Format of items. */
  format: PropTypes.oneOf(['align-left', 'align-right', 'full'])
}

SubMenu.defaultProps = {
  variant: 'primary-1',
  format: 'full'
}

export default SubMenu
