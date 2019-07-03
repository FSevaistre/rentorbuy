import React, { memo } from 'react'
import PropTypes from 'prop-types'
import * as B from '../../bricks'
import * as S from './styles'
const Graph = ({ type, initialCost, recurrentCosts, finalSavings }) => (
  <S.Graph>Graphique de ouf</S.Graph>
)

Graph.propTypes = {
  type: PropTypes.oneOf(['rent', 'buy']).isRequired,
  initialCost: PropTypes.number.isRequired,
  recurrentCosts: PropTypes.number.isRequired,
  finalSavings: PropTypes.number.isRequired
}

export default Graph
