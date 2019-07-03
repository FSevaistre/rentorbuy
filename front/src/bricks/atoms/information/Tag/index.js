import React from 'react'
import PropTypes from 'prop-types'

import './Tag.scss'

const Tag = ({ children, variant, size }) => {
  const tagSize = size === '' ? '' : ` tag--${size}`
  return <span className={`tag tag--${variant}${tagSize}`}>{children}</span>
}
Tag.propTypes = {
  /** Tag content. */
  children: PropTypes.node.isRequired,
  /** Tag variant. */
  variant: PropTypes.string,
  /** Tag size: <code>small</code>, <code>medium</code> or <code>large</code>. */
  size: PropTypes.string
}

Tag.defaultProps = {
  variant: 'neutral-1',
  size: 'medium'
}
export default Tag
