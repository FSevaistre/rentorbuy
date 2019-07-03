import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../..'
import { compact } from 'lodash'
import { CSSTransition } from 'react-transition-group'
import './Steps.scss'

class Steps extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 340, height: null, left: 0, smoothScrolling: false, currentLeft: 0 }
  }

  componentDidMount() {
    this.updateWidth()
    if (this.props.direction === 'horizontal') {
      this.scrollToX(this.props.current)
      if (!this.props.showDetails) {
        this.updateHeight()
        this.updateCurrentLeft()
      }
    }
  }

  container = () => document.getElementsByClassName('steps--horizontal')[0]
  currentElement = () => document.querySelectorAll('.step--current .step--content')[0]

  updateWidth = () => {
    const width = document.getElementsByClassName('step')[0].offsetWidth
    this.setState({ width })
  }

  updateHeight = () => {
    const containerHeight = 100 // this.container().offsetHeight
    const currentElemheight = this.currentElement().offsetHeight
    const height = currentElemheight + containerHeight
    this.setState({ height })
  }

  updateCurrentLeft = () => {
    const { current } = this.props
    const containerWidth = this.container().offsetWidth
    const distance = document.querySelectorAll('.steps--horizontal .step')[0].offsetWidth
    const elemWidth = this.currentElement().offsetWidth
    const isOutsideLeft = current * distance - elemWidth / 2 < 0
    const isOutsideRight = current * distance + elemWidth / 2 > containerWidth
    const currentLeft = isOutsideLeft
      ? current * distance * -1
      : isOutsideRight
      ? containerWidth - current * distance - elemWidth
      : -elemWidth / 2
    this.setState({ currentLeft })
  }

  scrollToX = current => {
    const currentElement = document.getElementsByClassName(`step--${current + 1}`)[0]
    const wrapper = document.getElementsByClassName('steps--container--horizontal')[0]
    if (currentElement && wrapper) {
      const overflow = (wrapper.offsetWidth - currentElement.offsetWidth) / 2
      let left = current * currentElement.offsetWidth - overflow
      wrapper.scrollLeft = left
    }
  }

  handleClickStep = index => {
    if (!this.props.showDetails) {
      this.props.onStepClick()
      this.timeout = setTimeout(() => {
        this.scrollToX(index)
      }, 800)
    }
    this.scrollToX(index)
  }

  componentDidUpdate(prevProps) {
    if (this.props.direction === 'horizontal' && prevProps.current !== this.props.current) {
      this.scrollToX(this.props.current)
      if (!this.props.showDetails) {
        this.updateHeight()
        this.updateCurrentLeft()
      }
    } else if (
      this.props.direction === 'horizontal' &&
      this.props.showDetails &&
      prevProps.showDetails !== this.props.showDetails
    ) {
      this.updateHeight()
      this.updateCurrentLeft()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { variant, size, current, children, direction, backgroundVariant, showDetails } = this.props
    const items = compact([].concat(children)) // dont include undefined and null
    const isDetailed = showDetails ? ' steps--container--detailed' : ' steps--container--not-detailed'
    // set width for horizontal scroll
    const width = items.length * this.state.width
    const content = (
      <div className={`steps steps--${variant} steps--${direction} steps--${size}`}>
        {items.map((step, index) => {
          const isBefore = index < current
          const isAfter = index > current
          const isCurrent = index === current
          const isLast = index === items.length - 1
          const isLastStepClass = isLast ? ' step--last' : ''
          let stepClass = 'current'
          if (isBefore) {
            stepClass = 'before'
          }
          if (isAfter) {
            stepClass = 'after'
          }
          return (
            <div
              key={index}
              className={`step step--${index + 1} step--${stepClass}${isLastStepClass}`}
              onClick={() => direction === 'horizontal' && this.handleClickStep(index)}
            >
              <CSSTransition in={isBefore && !isLast} timeout={800} classNames="step-link--transition" unmountOnExit>
                <div className="step--link" />
              </CSSTransition>
              <div className="step--wrapper">
                <div className="step--badge">
                  {showDetails && (
                    <CSSTransition in={isBefore || isLast} timeout={500} classNames="step-check--transition">
                      <div className="step--badge--check">
                        <Icon name="check" />
                      </div>
                    </CSSTransition>
                  )}
                </div>
                {(showDetails || isCurrent) && (
                  <div className="step--content" style={!showDetails ? { left: this.state.currentLeft } : {}}>
                    {step}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
    if (direction === 'vertical')
      return <div className={`steps--container steps--container--${backgroundVariant}${isDetailed}`}>{content}</div>
    const contentStyle = showDetails ? { width } : { height: this.state.height }
    return (
      <div className={`steps--container--horizontal steps--container--${backgroundVariant}${isDetailed}`}>
        <div style={contentStyle} className="steps--horizontal--content">
          {content}
        </div>
      </div>
    )
  }
}

Steps.propTypes = {
  /** Different steps. Each item should be a React element. */
  children: PropTypes.node.isRequired,
  /** Variant color of Steps badges. */
  variant: PropTypes.string,
  /** Defines background Variant color. */
  backgroundVariant: PropTypes.string,
  /** Size of Steps. Can be <code>small</code>, <code>medium</code> or <code>large</code>. */
  size: PropTypes.string,
  /** Horizontal or Vertical. */
  direction: PropTypes.string,
  /** Index of current step. Starting at 0. */
  current: PropTypes.number,
  /** Click on step when details not shown. */
  onStepClick: PropTypes.func,
  /** Shows details of steps if true. */
  showDetails: PropTypes.bool
}
Steps.defaultProps = {
  variant: 'primary-1',
  backgroundVariant: 'white',
  beforeVariant: 'white',
  currentVariant: 'white',
  afterVariant: 'white',
  size: 'medium',
  direction: 'vertical',
  current: 0,
  showDetails: true
}

export default Steps
