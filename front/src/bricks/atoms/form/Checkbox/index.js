import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Checkbox.scss'

export default class Checkbox extends Component {
  static propTypes = {
    /** Id of Checkbox. Must be used for label click. */
    id: PropTypes.string.isRequired,
    /** Whether or not the checkbox can be focused via keyboard navigation. */
    focusable: PropTypes.bool,
    /** Value of Checkbox. */
    value: PropTypes.string,
    /** Checkbox label. */
    label: PropTypes.string,
    /***/
    format: PropTypes.string,
    /** Position of label: <code>'right'</code> or <code>'left'</code>. */
    labelPosition: PropTypes.string,
    /** Variant colors of Checkbox. */
    variant: PropTypes.string,
    /** Variant colors of Checkbox when not checked. */
    uncheckedVariant: PropTypes.string,
    /** Checkbox is checked if true. */
    checked: PropTypes.bool,
    /** Triggered when the checkbox is checked / unchecked. */
    onChange: PropTypes.func
  }

  static defaultProps = {
    focusable: true,
    format: 'default',
    labelPosition: 'right',
    variant: 'neutral-1',
    uncheckedVariant: 'neutral-1-20',
    checked: false,
    defaultChecked: false,
    onChange: () => {}
  }

  render() {
    const { id, focusable, value, labelPosition, variant, uncheckedVariant, format, checked, onChange } = this.props
    const checkedClass = checked ? 'checkbox--checked' : ''
    const checkboxButtonClass = `checkbox--button checkbox--${variant} checkbox--unchecked--${uncheckedVariant} ${checkedClass} icon-check-2`
    let content = ''
    const focusProps = focusable ? {} : { tabIndex: '-1' }
    const checkboxButton = (
      <div className={checkboxButtonClass}>
        <input id={id} value={value || id} type="checkbox" checked={checked} onChange={onChange} {...focusProps} />
      </div>
    )
    const label = (
      <label htmlFor={id} className={`checkbox--label checkbox--label--${labelPosition}`}>
        {this.props.label}
      </label>
    )
    if (labelPosition === 'right')
      content = (
        <div className="checkbox--content">
          {checkboxButton}
          {label}
        </div>
      )
    if (labelPosition === 'left')
      content = (
        <div className="checkbox--content">
          {label}
          {checkboxButton}
        </div>
      )
    return <div className={`checkbox checkbox--${format}`}>{content}</div>
  }
}
