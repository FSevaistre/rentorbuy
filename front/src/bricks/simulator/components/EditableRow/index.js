import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Text, EditableInput } from '../../../index'
import './EditableRow.scss'

export default class EditableRow extends Component {
  static propTypes = {
    /** Triggered when any element of the row is Clicked. It automatically gets focus on the field. */
    onClick: PropTypes.func,
    /** Label of the component. */
    label: PropTypes.string,
    /** Props of <code>[NumberField](/#!/NumberField)</code> component. */
    numberFieldProps: PropTypes.object
  }
  handleClick = () => {
    this.input.numberfield.focus()
    this.props.onClick()
  }
  render() {
    const { label, numberFieldProps } = this.props
    return (
      <Row
        label={
          <span className="editable-row--label" onClick={this.handleClick}>
            <Text size="small" variant="neutral-1-60">
              {label}
            </Text>
          </span>
        }
        value={
          <span className="editable-row--value">
            <EditableInput numberFieldProps={numberFieldProps} ref={input => (this.input = input)} />
          </span>
        }
      />
    )
  }
}
