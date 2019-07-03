import React from 'react'
import PropTypes from 'prop-types'
import './Spinner.scss'

const Spinner = ({ variant, size, format, overlay, children }) => {
  let spinnerContainerClass = `spinner--container spinner--${size} spinner--${format}`
  if (overlay) {
    spinnerContainerClass += ' spinner--overlay'
  }
  let content = null
  switch (format) {
    case 'old':
      content = <div className={`spinner spinner--${variant}`} />
      break
    case 'bubble-chat':
      content = (
        <div className="spinner">
          <div className={`bounce bounce--${variant} bounce-1`} />
          <div className={`bounce bounce--${variant} bounce-2`} />
          <div className={`bounce bounce--${variant} bounce-3`} />
        </div>
      )
      break
    default:
      content = (
        <div className={`spinner spinner--prism spinner--prism--${variant}`}>
          <div className="vertical-centered-box">
            <div className="content">
              <div className="loader-circle" />
              <div className="loader-line-mask">
                <div className="loader-line" />
              </div>
            </div>
          </div>
        </div>
      )
  }
  return (
    <div className={spinnerContainerClass}>
      <div className="spinner--wrapper">
        {content}
        {children && <div className="spinner--content">{children}</div>}
      </div>
    </div>
  )
}

Spinner.propTypes = {
  /** Content below Spinner. */
  children: PropTypes.node,
  /** Variant color of Spinner. */
  variant: PropTypes.string,
  /** Size of Spinner. Can be <code>small</code>, <code>medium</code> or <code>large</code>*/
  size: PropTypes.string,
  /** Format of spinner. Set to <code>bubble</code> to have a bubble spinner. */
  format: PropTypes.string,
  /** Should the spinner be overlayed. */
  overlay: PropTypes.bool
}
Spinner.defaultProps = {
  variant: 'primary-1',
  size: 'medium',
  format: 'default',
  overlay: false
}
export default Spinner
