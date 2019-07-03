import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { EditableRow } from '../../../index'
import './EditableFields.scss'

export default class EditableFields extends PureComponent {
  static propTypes = {
    /** Array of <code>[EditableRow](/#!/EditableRow)</code> props coponents.*/
    fields: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const { fields } = this.props
    return (
      <div className="editable-fields">
        {fields.map((field, index) => {
          return (
            <div key={index} className="editable-fields--field">
              <EditableRow {...field} />
            </div>
          )
        })}
      </div>
    )
  }
}
