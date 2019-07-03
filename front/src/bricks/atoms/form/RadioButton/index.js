import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './RadioButton.scss'

export default class RadioButton extends Component {
  static propTypes = {
    /** Id of RadioButton. Must be used for label click. */
    id: PropTypes.string.isRequired,
    /** Value of RadioButton. */
    value: PropTypes.any,
    /** RadioButton label. */
    label: PropTypes.string.isRequired,
    name: PropTypes.any,
    /** Position of label: <code>'right'</code> or <code>'left'</code>. */
    labelPosition: PropTypes.string,
    /** Variant colors of RadioButton. If set, overrides the RadioButtonGroup variant. */
    variant: PropTypes.string,
    /** RadioButton is checked if true. */
    checked: PropTypes.bool,
    /** @ignore Do not use. Inherited from RadioButtonGroup. */
    format: PropTypes.string,
    /** @ignore Do not use. Is used by RadioButtonGroup */
    onChange: PropTypes.func
  }

  static defaultProps = {
    value: '',
    labelPosition: 'right',
    variant: 'initial',
    format: 'default',
    checked: false
  }
  constructor(props) {
    super(props)
    this.state = {
      checked: props.checked
    }
  }
  handleChange = e => {
    this.props.onChange(e.target.value)
  }
  render() {
    const { id, name, value, checked, variant, labelPosition, format } = this.props
    const checkedClass = checked ? 'radio--checked' : ''
    const radioButtonClass = `radio--button radio--${variant} ${checkedClass}`
    let content = ''
    const radioButton = (
      <div className={radioButtonClass}>
        <input
          id={id}
          type="radio"
          name={name}
          checked={checked}
          onChange={this.handleChange}
          value={value}
          ref={checkbox => (this.checkbox = checkbox)}
        />
        <div className="circle-container icon-check-2">
          <div className="circle-loader-wrap">
            <div className="left-wrap">
              <div className={`loader loader--${variant}`} />
            </div>
            <div className="right-wrap">
              <div className={`loader loader--${variant}`} />
            </div>
          </div>
        </div>
      </div>
    )
    const label = (
      <label htmlFor={id} className="radio--label">
        {this.props.label}
      </label>
    )
    if (labelPosition === 'right')
      content = (
        <div className="radio--content">
          {radioButton}
          {label}
        </div>
      )
    if (labelPosition === 'left')
      content = (
        <div className="radio--content">
          {label}
          {radioButton}
        </div>
      )
    const radioContainerClass = format === 'default' ? 'radio' : `radio radio--${format}`
    return <div className={radioContainerClass}>{content}</div>
  }
}
