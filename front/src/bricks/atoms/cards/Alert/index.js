import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../..'
import './Alert.scss'

const Alert = ({ children, variant, format }) => {
  const formatClass = format !== '' ? `alert--${format}` : ''
  const bannerContent = format === 'banner' && (
    <div className="alert alert--banner alert--banner-hidden">
      <Card>{children}</Card>
    </div>
  )
  const bannerProps = format === 'banner' ? { noRadius: true } : {}
  const alertClass = `alert alert--${variant} ${formatClass}`
  return (
    <div>
      <div className={alertClass}>
        <Card variant={variant} {...bannerProps}>
          {children}
        </Card>
      </div>
      {bannerContent}
    </div>
  )
}

Alert.propTypes = {
  /** Node of children. */
  children: PropTypes.node.isRequired,
  /** Variants of alert: <code>valid</code>, <code>error</code>. */
  variant: PropTypes.string,
  format: PropTypes.string
}

Alert.defaultProps = {
  variant: 'success',
  format: ''
}

export default Alert
