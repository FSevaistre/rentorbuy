import React from 'react'
import PropTypes from 'prop-types'
import './FormSection.scss'

const FormSection = ({ title, children }) => {
  return (
    <div className="form-section">
      <div className="form-section--title">{title}</div>
      <div className="form-section--content">{children}</div>
    </div>
  )
}

FormSection.propTypes = {
  /** Children must be <FormField></FormField> components.*/
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export default FormSection
