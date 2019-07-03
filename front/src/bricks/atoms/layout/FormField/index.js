import React from 'react'
import PropTypes from 'prop-types'
import './FormField.scss'

export const FormField = ({ label, labelId, children }) => {
  return (
    <div className="form-field">
      {label && (
        <label className="form-field--label" htmlFor={labelId}>
          {label}
        </label>
      )}
      <div className="form-field--content">{children}</div>
    </div>
  )
}

FormField.propTypes = {
  /** Children can be any Field component.*/
  children: PropTypes.node.isRequired,
  /** Label of Field. */
  label: PropTypes.string,
  /** ID of label for linking to field on on click. */
  labelId: PropTypes.string
}

export default FormField
