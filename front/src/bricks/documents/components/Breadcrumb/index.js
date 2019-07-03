import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon, Text } from '../../../index'
import './Breadcrumb.scss'

export default class Breadcrumb extends PureComponent {
  static propTypes = {
    /** Steps of breadcrumb. Shloud be an array filled with nodes and onClick function `{label: '', onClick: ()=>{}}`. */
    steps: PropTypes.array.isRequired,
    /** Click function on go back arrow. */
    onGoBack: PropTypes.func.isRequired
  }

  render() {
    const { steps, onGoBack } = this.props
    return (
      <div className="breadcrumb">
        <div className="breadcrumb--back" onClick={onGoBack}>
          <Icon name="arrow-left" />
        </div>
        <div className="breadcrumb--steps">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1
            const handleClick = () => {
              const { onClick } = step
              return onClick && onClick(step)
            }
            return (
              <div key={i} className="breadcrumb--steps--step">
                <div className="breadcrumb--steps--step--label" onClick={handleClick}>
                  <Text size="small">{step.label}</Text>
                </div>
                {!isLast && (
                  <div className="breadcrumb--steps--step--icon">
                    <Icon name="chevron-right" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
