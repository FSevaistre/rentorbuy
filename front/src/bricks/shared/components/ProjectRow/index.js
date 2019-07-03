import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { Desktop, Icon, Mobile, SubHeading, Text } from '../../../index'

const ProjectRow = ({ actionIcon, description, isPushed, leftSpaced, onAction, rightSpaced, sign, title, value }) => (
  <div className={classnames('projectRow', { 'projectRow--pushed': isPushed })}>
    <div className="projectRow__row">
      <div className={classnames('projectRow__side--left', { 'projectRow__side--left--spaced': leftSpaced || sign })}>
        <div className="projectRow__title">
          {sign && (
            <div className="projectRow__sign">
              <Icon
                name={
                  {
                    '-': 'operation-minus',
                    '+': 'operation-plus',
                    '=': 'operation-equal'
                  }[sign]
                }
                variant={sign === '=' ? 'primary-1' : 'inherit'}
              />
            </div>
          )}

          {isPushed ? <SubHeading variant="accent-1">{title}</SubHeading> : <Text>{title}</Text>}
        </div>

        <Desktop>
          {description && (
            <div className="projectRow__description">
              <Text size="small" variant="neutral-1-60">
                {description}
              </Text>
            </div>
          )}
        </Desktop>
      </div>

      <div
        className={classnames('projectRow__value', 'projectRow__side--right', {
          'projectRow__side--right--spaced': onAction || rightSpaced
        })}
      >
        <SubHeading>{value}</SubHeading>

        {onAction && (
          <div className="projectRow__side--right__icon" onClick={onAction}>
            <Icon name={actionIcon} variant="primary-1" />
          </div>
        )}
      </div>
    </div>

    <Mobile>
      {description && (
        <div
          className={classnames('projectRow__description', {
            'projectRow__description--left-spaced': leftSpaced || sign,
            'projectRow__description--right-spaced': onAction || rightSpaced
          })}
        >
          <Text size="small" variant="neutral-1-60">
            {description}
          </Text>
        </div>
      )}
    </Mobile>
  </div>
)

ProjectRow.propTypes = {
  /** Icon that appears when onAction is set. */
  actionIcon: PropTypes.string,
  /** Description, appears below the title on the left side. */
  description: PropTypes.node,
  /** If row is pushed, apply special styles. */
  isPushed: PropTypes.bool,
  /** Whether or not the row should have an offset on the left side if leftSpaced is not set. */
  leftSpaced: PropTypes.bool,
  /** Event handler when the action button is pressed. This causes the row to have an offset on the rigth side even though rightSpaced is not set. */
  onAction: PropTypes.func,
  /** Whether or not the row should have an offset on the rigth side if rightSpaced is not set. */
  rightSpaced: PropTypes.bool,
  /** Defines the math sign which should appear on the left. This causes the row to have an offset on the left side even though leftSpaced is not set.*/
  sign: PropTypes.oneOf(['+', '-', '=']),
  /** Title, appears on the left side. */
  title: PropTypes.string.isRequired,
  /** Value, appears on the right side. */
  value: PropTypes.string.isRequired
}

ProjectRow.defaultProps = {
  actionIcon: 'pen',
  leftSpaced: false,
  rightSpaced: false
}

export default ProjectRow
