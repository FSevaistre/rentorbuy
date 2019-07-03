import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Emoji, SubHeading, Button, Text, Mobile, Desktop } from '../../../index'
import './TimelineStep.scss'

export default class TimelineStep extends PureComponent {
  static propTypes = {
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    buttonProps: PropTypes.object,
    emoji: PropTypes.string,
    isBefore: PropTypes.bool,
    isCurrent: PropTypes.bool,
    isAfter: PropTypes.bool,
    isLast: PropTypes.bool
  }

  render() {
    const { title, content, buttonProps, emoji, isBefore, isCurrent, isLast } = this.props
    const stepPosition = isBefore ? 'before' : isCurrent ? 'current' : 'after'
    return (
      <div className={`timeline-step timeline-step--${stepPosition}${isLast ? ' timeline-step--last' : ''}`}>
        <div className="timeline-step--title">
          {emoji && (
            <div className="timeline-step--title--emoji">
              <Mobile>
                <Emoji>{emoji}</Emoji>
              </Mobile>
              <Desktop>
                <Emoji size="medium">{emoji}</Emoji>
              </Desktop>
            </div>
          )}
          <div className="timeline-step--title--text">
            <SubHeading size="large">{title}</SubHeading>
          </div>
        </div>
        <div className="timeline-step--content">
          <Text size="small">{content}</Text>
        </div>
        {isCurrent && buttonProps && (
          <div className="timeline-step--button">
            <Button format="full" variant="accent-1" {...buttonProps} />
          </div>
        )}
      </div>
    )
  }
}
