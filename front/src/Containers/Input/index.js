import React, { memo } from 'react'
import PropTypes from 'prop-types'
import * as B from '../../bricks'
import * as S from './styles'
const Input = ({ label, ...props }) => (
  <S.Input>
    {label}
    {props.onChange ? <B.NumberField {...props} /> : <div>{props.value}</div>}
  </S.Input>
)

Input.propTypes = {
  type: PropTypes.oneOf(['rent', 'buy']).isRequired,
  initialCost: PropTypes.number.isRequired,
  recurrentCosts: PropTypes.number.isRequired,
  finalSavings: PropTypes.number.isRequired
}

export default Input
