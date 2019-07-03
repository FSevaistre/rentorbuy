import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { CapacitySwipe, ContributionFieldset, SliderRange } from '../../../index'
import './CapacityBudget.scss'

export default class CapacityBudget extends PureComponent {
  static propTypes = {
    contributionFieldsetProps: PropTypes.object,
    sliderRangeProps: PropTypes.object,
    capacitySwipeProps: PropTypes.object
  }
  render() {
    const { contributionFieldsetProps, sliderRangeProps, capacitySwipeProps } = this.props
    return (
      <div className="capacity-budget">
        <div className="capacity-budget--slider">
          <SliderRange format="full" {...sliderRangeProps} />
        </div>
        <div className="capacity-budget--fieldset">
          <ContributionFieldset {...contributionFieldsetProps} />
        </div>
        <div className="capacity-budget--swipe">
          <CapacitySwipe {...capacitySwipeProps} />
        </div>
      </div>
    )
  }
}
