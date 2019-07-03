import React, { memo } from 'react'
import PropTypes from 'prop-types'
import * as B from '../../bricks'

const Summary = ({ type, initialCost, recurrentCosts, finalSavings }) => (
  <B.Card variant={type === 'rent' ? 'accent-1' : 'primary-1'}>
    <B.Content>
      <B.Heading>{type === 'rent' ? 'Louer' : 'Acheter'}</B.Heading>
      <div>Cout inital : {initialCost}</div>
      <div>couts récurrents : {recurrentCosts}</div>
      <div>Plus value : {finalSavings}</div>
      <div>Total : {initialCost + recurrentCosts - finalSavings}</div>
    </B.Content>
  </B.Card>
)
Summary.propTypes = {
  type: PropTypes.oneOf(['rent', 'buy']).isRequired,
  initialCost: PropTypes.number.isRequired,
  recurrentCosts: PropTypes.number.isRequired,
  finalSavings: PropTypes.number.isRequired
}

export default Summary
