import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Progress.scss'

export default class Progress extends PureComponent {
  static propTypes = {
    /** Current value of Progress. */
    value: PropTypes.number,
    /** Maximum value of Progress. */
    max: PropTypes.number,
    /** Variant styles of Progress (bar). */
    variant: PropTypes.string,
    /** Variant styles of Progress (background). */
    backgroundVariant: PropTypes.string,
    /** Format of Progress. */
    format: PropTypes.string,
    /** Show steps as text. */
    showSteps: PropTypes.bool
  }

  static defaultProps = {
    value: 0,
    max: 2,
    variant: 'primary-1',
    backgroundVariant: 'neutral-1-20',
    format: 'default'
  }
  render() {
    const { value, max, variant, backgroundVariant, format } = this.props
    return (
      <div className={`progress progress--${format} progress--${value === max ? 'completed' : 'ongoing'}`}>
        <div className={`progress--container progress--container--${backgroundVariant}`}>
          <div
            className={`progress--content progress--content--${variant}`}
            value={value}
            max={max}
            style={{ width: `${(value / max) * 100}%` }}
          />
        </div>
      </div>
    )
  }
}
