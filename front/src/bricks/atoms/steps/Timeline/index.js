import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../../..'
import './Timeline.scss'

const Timeline = ({ steps, variant, current, active }) => {
  return (
    <div className="timeline">
      {steps.map((step, index) => {
        const activeClassName = active === index ? ' timeline--step--active' : ''
        const stepPosition = index === current ? 'current' : index < current ? 'before' : 'after'
        const elemVariant = step.variant || variant
        return (
          <div
            key={index}
            className={`timeline--step timeline--step--${stepPosition} timeline--step--${
              step.format
            }${activeClassName}`}
          >
            {step.format !== 'title' && (
              <div
                className={`timeline--step--dot timeline--step--dot--${index > active ? 'neutral-1-20' : elemVariant}`}
              />
            )}
            <div className={`timeline--step--content timeline--step--content--${elemVariant}`}>{step.children}</div>
            {step.format === 'title' && (
              <div className="timeline--step--divider">
                <Divider />
              </div>
            )}
            <div
              className={`timeline--step--line timeline--step--line--${
                index > active - 1 ? 'neutral-1-20' : elemVariant
              }`}
            />
          </div>
        )
      })}
    </div>
  )
}

Timeline.propTypes = {
  /** Timeline steps. Must be an array with object children, as follow: */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.node,
      format: PropTypes.string,
      variant: PropTypes.string
    })
  ).isRequired,
  /** Variant of timeline. Inherits all children, but every child can have its own variant overriding the parent's */
  variant: PropTypes.string,
  /** Current step of timeline. */
  current: PropTypes.number,
  /** Active step of timeline. A step can be both active and current, but active can't be higher. */
  active: PropTypes.number
}

Timeline.defaultProps = {
  variant: 'neutral-1',
  current: 0
}

export default Timeline
