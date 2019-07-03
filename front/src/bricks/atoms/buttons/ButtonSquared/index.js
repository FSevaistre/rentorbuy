import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styles'

const ButtonSquared = ({ children, variant, ...props }) => (
  <S.Button {...props} variant={variant}>
    <span>{children}</span>
  </S.Button>
)

ButtonSquared.defaultProps = {
  variant: 'primary-1'
}

ButtonSquared.propTypes = {
  variant: PropTypes.string
}

export default ButtonSquared
