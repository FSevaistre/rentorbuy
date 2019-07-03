import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, EditableRow } from '../../../index'
import './EditableRows.scss'

export default class EditableRows extends Component {
  static propTypes = {
    /** Array of <code>[EditableRow](/#!/EditableRow)</code> props coponents.*/
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    /** A button will appear when set to <code>true</code>. */
    isChanging: PropTypes.bool,
    /** onClick function. */
    onValidate: PropTypes.func
  }

  render() {
    const { rows, onValidate, isChanging } = this.props
    return (
      <div className="editable-rows">
        {rows.map((row, index) => {
          Object.assign(row, { isChanging })
          return (
            <div key={index} className="editable-rows--row">
              <EditableRow {...row} />
            </div>
          )
        })}
        {isChanging && (
          <div className="editable-rows--button">
            <Button onClick={onValidate} format="full">
              Simuler mon prêt
            </Button>
          </div>
        )}
      </div>
    )
  }
}
