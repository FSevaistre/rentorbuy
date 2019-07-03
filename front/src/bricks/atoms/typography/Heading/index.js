import { BaseComponent } from '../../../index'
import React from 'react'
import PropTypes from 'prop-types'
import './Heading.scss'

const Heading = ({ children, size, variant, format, type }) => {
  const sizeClass = ` heading--${size}`
  const variantClass = ` heading--${variant}`
  const formatClass = ` heading--${format}`

  return (
    <BaseComponent className={`heading${sizeClass}${variantClass}${formatClass}`} type={type}>
      {children}
    </BaseComponent>
  )
}

Heading.propTypes = {
  /** Children of heading */
  children: PropTypes.node.isRequired,
  /** Font-size of heading: <code>small</code>, <code>medium</code>, <code>large</code> */
  size: PropTypes.string,
  /** Variant color of Heading */
  variant: PropTypes.string,
  /** Format style of Heading */
  format: PropTypes.string,
  /** DOM type to be rendered */
  type: PropTypes.string
}

Heading.defaultProps = {
  size: 'medium',
  variant: 'inherit',
  format: 'default'
}

export default Heading
