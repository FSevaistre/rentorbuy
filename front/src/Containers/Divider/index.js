import React, { memo } from 'react'
import PropTypes from 'prop-types'
import * as B from '../../bricks'
import * as S from './styles'
const Divider = ({ children }) => (
  <S.Divider>
    <B.Heading size="small">{children}</B.Heading>
  </S.Divider>
)

Divider.propTypes = {
  type: PropTypes.oneOf(['rent', 'buy']).isRequired,
  initialCost: PropTypes.number.isRequired,
  recurrentCosts: PropTypes.number.isRequired,
  finalSavings: PropTypes.number.isRequired
}

export default Divider
