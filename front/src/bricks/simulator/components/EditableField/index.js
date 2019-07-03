import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NumberField, SubHeading } from '../../../index'
import './EditableField.scss'

export default class EditableField extends PureComponent {
  static propTypes = {
    /** Label of Field. */
    label: PropTypes.string.isRequired,
    /** Props of <code>[NumberField](/#!/NumberField)</code> component. */
    numberFieldProps: PropTypes.object
  }
  render() {
    const { label, numberFieldProps } = this.props
    return (
      <div className="editable-field">
        <div className="editable-field--label">
          <SubHeading size="small" variant="neutral-1-60">
            {label}
          </SubHeading>
        </div>
        <div className="editable-field--value">
          <div className="editable-field--value--amount">
            <NumberField {...numberFieldProps} format="editable-field" />
          </div>
          <div className="editable-field--value--currency">€</div>
        </div>
      </div>
    )
  }
}
