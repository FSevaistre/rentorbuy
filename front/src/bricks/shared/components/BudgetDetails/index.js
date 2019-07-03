import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Divider, ProjectRow } from '../../../index'
import './BudgetDetails.scss'

const BudgetDetails = ({ details, rate, cost }) => {
  return (
    <div className="budgetDetails">
      {details.map(({ title, value, description }, index) => {
        return (
          <div key={index} className={classnames('budgetDetails__row', { 'budgetDetails__row--first': index === 0 })}>
            <ProjectRow title={title} description={description} value={value} isPushed={index === 0} />
          </div>
        )
      })}
      <div className="budgetDetails__divider">
        <Divider />
      </div>
      <div className="budgetDetails__row">
        <ProjectRow title={rate.title} value={rate.value} />
      </div>
      <div className="budgetDetails__row">
        <ProjectRow title={cost.title} value={cost.value} />
      </div>
    </div>
  )
}
BudgetDetails.propTypes = {
  details: PropTypes.array,
  rate: PropTypes.object,
  cost: PropTypes.object
}

export default BudgetDetails
