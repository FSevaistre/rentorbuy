import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styles'

const ApplicationFormField = ({ component, label }) => (
  <div>
    {label && <S.Label>{label}</S.Label>}
    <div>{component}</div>
  </div>
)

ApplicationFormField.propTypes = {
  /** Field element. */
  component: PropTypes.element.isRequired,
  /** Label to be displayed above the field. */
  label: PropTypes.string
}

export default ApplicationFormField
