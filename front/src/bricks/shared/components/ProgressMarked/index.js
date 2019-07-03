import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Progress, Text } from '../../../index'
import './ProgressMarked.scss'

class ProgressMarked extends Component {
  render() {
    const { value, max } = this.props
    const isCompleted = value === max
    return (
      <div className="progress-marked">
        <div className="progress-marked--bar">
          <Progress {...this.props} format="rounded" variant={isCompleted ? 'success' : 'accent-1'} />
        </div>
        <div className="progress-marked--marks">
          <div className="progress-marked--marks--icon">{isCompleted && <Icon variant="success" name="check-2" />}</div>
          <Text size="small" variant={isCompleted ? 'success' : 'neutral-1'}>
            {isCompleted ? (
              <strong>
                {value}/{max}
              </strong>
            ) : (
              <span>
                {value}/{max}
              </span>
            )}
          </Text>
        </div>
      </div>
    )
  }
}

ProgressMarked.propTypes = {
  onClick: PropTypes.func
}

export default ProgressMarked
