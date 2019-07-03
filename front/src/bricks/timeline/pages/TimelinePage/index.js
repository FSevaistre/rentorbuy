import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TimelineSteps } from '../../../index'
import './TimelinePage.scss'

export default class TimelinePage extends PureComponent {
  static propTypes = {
    timelineStepsProps: PropTypes.object
  }
  render() {
    const { timelineStepsProps } = this.props
    return (
      <div className="timeline-page">
        <div className="timeline-page--wrapper">
          <TimelineSteps {...timelineStepsProps} />
        </div>
      </div>
    )
  }
}
