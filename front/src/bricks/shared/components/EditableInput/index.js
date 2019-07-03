import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, NumberField, SubHeading } from '../../../index'
import './EditableInput.scss'

export default class EditableInput extends Component {
  static propTypes = {
    icon: PropTypes.string,
    variant: PropTypes.string,
    numberFieldProps: PropTypes.object
  }

  static defaultProps = {
    variant: 'primary-1',
    icon: 'pen'
  }

  state = {
    isFocused: false
  }

  handleBlur = () => {
    const {
      numberFieldProps: { onBlur }
    } = this.props
    if (onBlur) onBlur()
    this.setState({ isFocused: false })
  }
  handleFocus = () => {
    const {
      numberFieldProps: { onFocus }
    } = this.props
    if (onFocus) onFocus()
    this.setState({ isFocused: true })
  }

  handleFocusField = () => {
    this.numberfield.focus()
  }

  render() {
    const { icon, variant, numberFieldProps } = this.props
    const iconVariant = this.state.isFocused ? 'neutral-1' : 'inherit'

    return (
      <div className={`editable-input editable-input--${variant}`}>
        <div className="editable-input--field">
          <div className="editable-input--field--numberfield">
            <NumberField
              {...numberFieldProps}
              format="form"
              ref={numberfield => {
                this.numberfield = numberfield
              }}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              variant={variant}
            />
          </div>
          <div className="editable-input--field--currency" onClick={this.handleFocusField}>
            <SubHeading>€</SubHeading>
          </div>
          <div className="editable-input--field--icon" onClick={this.handleFocusField}>
            <Icon name={icon} variant={iconVariant} />
          </div>
        </div>
      </div>
    )
  }
}
