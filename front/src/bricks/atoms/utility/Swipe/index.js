import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { compact } from 'lodash'

import Dots from '../Dots'
import './Swipe.scss'

export default class Swipe extends Component {
  static propTypes = {
    /** Children as different siwpe components. At least 2 are needed in order to work+. */
    children: PropTypes.node.isRequired,
    /** Starting index of swipe. */
    index: PropTypes.number,
    /** Dots class for custom positionning. */
    dotsClass: PropTypes.string,
    /** @deprecated Should use dotsProps insted. Dots Variant colors. */
    dotsVariant: PropTypes.string,
    /** If <code>true</code>, it will enable mouse events. This will allow the user to perform the relevant swipe actions with a mouse. */
    enableMouseEvents: PropTypes.bool,
    /** Should the swipe option be disabled. */
    disabled: PropTypes.bool,
    /** Format style of Swipe. */
    format: PropTypes.string,
    /** Position of dots. */
    dotsProps: PropTypes.object
  }

  static defaultProps = {
    index: 0,
    dotsClass: '',
    dotsVariant: 'primary-1',
    enableMouseEvents: false,
    format: 'default'
  }

  constructor(props) {
    super(props)
    this.state = {
      index: props.index,
      nextIndex: 0
    }
  }

  handleSwipe = nextIndex => {
    this.setState({ nextIndex })
  }

  handleTransitionEnd = () => {
    this.setState({ index: this.state.nextIndex })
  }

  handleDotClick = nextIndex => {
    this.setState({ nextIndex }, this.handleTransitionEnd)
  }
  render() {
    const { children, dotsClass, dotsVariant, enableMouseEvents, disabled, format, dotsProps } = this.props
    const { index } = this.state
    const items = compact([].concat(children))
    return (
      <div
        className={`swipe swipe--${format}${format === 'full' && dotsProps && dotsProps.position
          ? ` swipe--full--${dotsProps.position}`
          : ''}`}
      >
        <SwipeableViews
          className="swipe--view"
          index={index}
          onChangeIndex={this.handleSwipe}
          onTransitionEnd={this.handleTransitionEnd}
          enableMouseEvents={enableMouseEvents}
          disabled={disabled}
          resistance
          slideStyle={{ overflow: 'visible' }}
          slideClassName="swipe__slide"
        >
          {items.map((view, i) => {
            let viewClass = 'view view--'
            const isCurrent = i === index
            const isBefore = i < index
            const isAfter = i > index
            if (isCurrent) viewClass += 'current'
            if (isBefore) viewClass += 'before'
            if (isAfter) viewClass += 'after'
            return (
              <div key={i} className={viewClass}>
                <div className="view--content">{view}</div>
              </div>
            )
          })}
        </SwipeableViews>
        {items.length > 1 && (
          <div
            className={`swipe--dots ${dotsClass}${dotsProps && dotsProps.position
              ? ` swipe--dots--${dotsProps.position}`
              : ''}`}
          >
            <Dots
              number={items.length}
              isActive={index}
              variant={dotsVariant}
              {...dotsProps}
              onClick={this.handleDotClick}
            />
          </div>
        )}
      </div>
    )
  }
}
