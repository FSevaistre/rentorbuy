import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../../..'

import './ListItem.scss'

const ListItem = ({ children, format, variant, dividerProps, onClick, tabIndexed, onKeyDown }) => {
  const handleClick = () => {
    if (onClick) onClick()
  }
  const cursorClass = onClick ? ' list-item--pointer' : ''
  const tabIndex = tabIndexed ? { tabIndex: 0, onKeyDown } : {}
  return (
    <li
      className={`list-item list-item--${format} list-item--${variant}${cursorClass}`}
      onClick={handleClick}
      {...tabIndex}
    >
      <div className="list-item--content">{children}</div>
      <Divider variant={dividerProps.variant} opacity={dividerProps.opacity} />
    </li>
  )
}

ListItem.propTypes = {
  /** Children of <code>ListItem</code>. Can be any node. */
  children: PropTypes.node,
  /** On click function. */
  onClick: PropTypes.func,
  /** Format style of ListItem. */
  format: PropTypes.string,
  /** Variant colors of element. */
  variant: PropTypes.string,
  /** Divider Props. */
  dividerProps: PropTypes.object,
  /** Set tabIndex to 0 if true. */
  tabIndexed: PropTypes.bool,
  /** onKeyDown event for item. */
  onKeyDown: PropTypes.func
}

ListItem.defaultProps = {
  format: 'default',
  variant: 'neutral-1',
  children: '',
  dividerProps: {
    variant: 'neutral-1-20',
    opacity: '1'
  }
}

export default ListItem
