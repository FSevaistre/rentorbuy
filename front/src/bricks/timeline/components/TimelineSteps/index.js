import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { findIndex } from 'lodash'
import { Steps, Mobile, Desktop } from '../../../index'
import './TimelineSteps.scss'

class TimelineStepsOrganism extends PureComponent {
  static propTypes = {
    current: PropTypes.string,
    stepsComponents: PropTypes.arrayOf(PropTypes.element),
    isMobile: PropTypes.bool
  }

  constructor(props) {
    super(props)
    let current =
      findIndex(props.stepsComponents, child => {
        return child.props.isCurrent
      }) - 1
    this.state = {
      current
    }
  }

  incrementCurrent = () => this.setState(({ current }) => ({ current: current + 1 }))

  componentDidMount() {
    if (this.state.current === -1) this.incrementCurrent()
    else
      this.timeout = setTimeout(() => {
        this.incrementCurrent()
      }, 300)

    const currentStepIndex = findIndex(this.props.stepsComponents, child => child.props.isCurrent)

    if (this.props.isMobile && currentStepIndex > 0) {
      const previousStep = document.querySelector(`.step.step--${currentStepIndex}`)

      previousStep.scrollIntoView()
    }
  }

  handleToggleDetails = () => this.setState(prevState => ({ showDetails: !prevState.showDetails }))

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { current } = this.state
    const { stepsComponents } = this.props
    const timelineProps = {
      variant: 'accent-1',
      backgroundVariant: 'neutral-1-l',
      current
    }
    return (
      <div className="timeline-steps">
        <div className="timeline-steps--content">
          <Mobile>
            <Steps {...timelineProps}>{stepsComponents}</Steps>
          </Mobile>
          <Desktop>
            <Steps direction="horizontal" {...timelineProps}>
              {stepsComponents}
            </Steps>
          </Desktop>
        </div>
      </div>
    )
  }
}

const TimelineSteps = props => (
  <Fragment>
    <Mobile>
      <TimelineStepsOrganism {...props} isMobile />
    </Mobile>
    <Desktop>
      <TimelineStepsOrganism {...props} />
    </Desktop>
  </Fragment>
)

export default TimelineSteps
