import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line } from 'recharts'
import * as B from '../../bricks'
import * as S from './styles'
const Graph = ({ costs }) => {
  const data = costs.map(({ rent, purchase }, i) => {
    return {
      duration: i + 1,
      Acheter:
        purchase.initial_costs +
        purchase.recuring_costs +
        purchase.final_savings,
      Louer: rent.initial_costs + rent.recuring_costs + rent.final_savings
    }
  })
  return (
    <S.Graph>
      <LineChart
        width={400}
        height={200}
        data={data}
        margin={{ top: 16, right: 16, left: 16, bottom: 0 }}
      >
        <XAxis dataKey="duration" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" strokeDasharray="1 10" />
        <Line type="monotone" dataKey="Acheter" stroke="#35ae77" />
        <Line type="monotone" dataKey="Louer" stroke="#1098f7" />
      </LineChart>
    </S.Graph>
  )
}

Graph.propTypes = {
  costs: PropTypes.array.isRequired
}

export default memo(Graph)
