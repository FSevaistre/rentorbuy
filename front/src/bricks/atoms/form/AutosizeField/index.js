import React from 'react'
import PropTypes from 'prop-types'
import AutosizeInput from 'react-input-autosize'

import './AutosizeField.scss'

const AutosizeField = ({ type, placeholder, value, onChange, onBlur }) => {
  let autosizeClass = value === '' ? 'autosize--input' : 'autosize--input autosize--input-is-valid'
  const handleChange = e => onChange(e.target.value)
  const handleBlur = () => onBlur()
  return (
    <AutosizeInput
      type={type}
      value={value}
      className={autosizeClass}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
    />
  )
}

AutosizeField.propTypes = {
  /** Types of field: <code>tel</code>, <code>email</code>.*/
  type: PropTypes.string,
  /** Placeholder of AutosizeField. */
  placeholder: PropTypes.string,
  /** Value of AutosizeField. */
  value: PropTypes.string,
  /** Triggered when value changes. */
  onChange: PropTypes.func,
  /** Triggered when exiting focus. */
  onBlur: PropTypes.func
}

AutosizeField.defaultProps = {
  type: 'text',
  placeholder: '',
  onChange: () => {},
  onBlur: () => {}
}

export default AutosizeField
