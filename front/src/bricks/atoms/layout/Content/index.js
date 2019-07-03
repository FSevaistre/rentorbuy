import React from 'react'
import PropTypes from 'prop-types'
import './Content.scss'

const Content = ({ children, variant, size, format }) => {
  const variantClass = variant ? ` atom--content--${variant}` : ''
  let formatClass = ''
  if (Array.isArray(format)) format.map(f => (formatClass += ` atom--content--${f}`))
  if (typeof format === 'string') formatClass = ` atom--content--${format}`
  const sizeClass = ` atom--content--${size}`
  return <div className={`atom--content${sizeClass}${variantClass}${formatClass}`}>{children}</div>
}

Content.propTypes = {
  /** Children of content */
  children: PropTypes.node.isRequired,
  /** Backgroud variant of content */
  variant: PropTypes.string,
  /** Format style of content */
  format: PropTypes.string,
  /** Padding style of content */
  size: PropTypes.oneOf(['responsive', 'small', 'x-small'])
}

Content.defaultProps = {
  size: 'responsive'
}

export default Content
