import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { MaturityChoice } from '../../../index'
import './DashboardMaturityDetails.scss'

const DashboardMaturityDetails = ({ option, isPlaceholder }) => (
  <div className="dashboard-maturity-details">
    <MaturityChoice option={option} isPlaceholder={isPlaceholder} />
  </div>
)
DashboardMaturityDetails.displayName = 'DashboardMaturityDetails'
DashboardMaturityDetails.propTypes = {
  option: PropTypes.string,
  isPlaceholder: PropTypes.bool
}

export default memo(DashboardMaturityDetails)
