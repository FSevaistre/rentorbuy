import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../..'
import './Badge.scss'

const Badge = ({ variant, format, size, icon, children, isGlowing }) => {
  const iconComponent = icon !== '' ? <Icon name={icon} /> : children
  let badgeClass = `badge badge--${variant} badge--${format} badge--${size}`
  if (isGlowing) badgeClass += ' badge--glowing'
  return <div className={badgeClass}>{iconComponent}</div>
}

Badge.propTypes = {
  /** Name of icon used for badge. */
  icon: PropTypes.node,
  /** Can be used instead of icon */
  children: PropTypes.node,
  /** Background color of badge. */
  variant: PropTypes.string,
  /** Format of badge. */
  format: PropTypes.string,
  /** Size of badge. */
  size: PropTypes.string,
  /** Special glowing effect */
  isGlowing: PropTypes.bool
}

Badge.defaultProps = {
  variant: 'neutral-1-l',
  format: 'default',
  size: 'medium',
  icon: ''
}

export default Badge
