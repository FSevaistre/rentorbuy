import { BaseComponent } from '../../../index'
import React from 'react'
import PropTypes from 'prop-types'
import './Text.scss'

const Text = ({ children, size, variant, format, type, ...props }) => {
  const sizeClass = ` text--${size}`
  const variantClass = ` text--${variant}`
  const formatClass = ` text--${format}`

  return (
    <BaseComponent className={`text${sizeClass}${variantClass}${formatClass}`} type={type} {...props}>
      {children}
    </BaseComponent>
  )
}

Text.propTypes = {
  /** Children of text */
  children: PropTypes.node.isRequired,
  /** Font-size of text: <code>x-small</code>, <code>small</code>, <code>medium</code> */
  size: PropTypes.string,
  /** Variant colorof Text */
  variant: PropTypes.string,
  /** Variant colorof Text */
  format: PropTypes.string,
  /** DOM type to be rendered */
  type: PropTypes.string
}

Text.defaultProps = {
  size: 'medium',
  variant: 'inherit',
  format: 'default'
}

export default Text
